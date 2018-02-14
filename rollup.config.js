import typescript from 'typescript';
import typescriptPlugin from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import localResolve from "rollup-plugin-local-resolve";
import uglify from 'rollup-plugin-uglify';

const dev = 'development';
const prod = 'production';

const env = parseNodeEnv(process.env.NODE_ENV);

const config = {
    name: "Tachyons",
    plugins: [
        peerDepsExternal(),
        typescriptPlugin({
            // The current rollup-plugin-typescript includes an old version of typescript, so we import and pass our own version
            typescript,
            // rollup-plugin-typescript will inject some typescript helpers to your files (normally tsc will
            // do this). They however have some ES6 keywords like const so they break older browsers.
            // This instructs rollup-plugin-typescript to import tslib instead, which includes the same helpers
            // in proper format.
            importHelpers: true,
        }),
        replace({
            // The react sources include a reference to process.env.NODE_ENV so we need to replace it here with the actual value
            'process.env.NODE_ENV': JSON.stringify(env),
        }),
        // nodeResolve makes rollup look for dependencies in the node_modules directory
        localResolve(),
        nodeResolve({
            browser: true,
            preferBuiltins: false,
            jsnext: true,
            extensions: ['.js', '.ts', '.tsx'],
        }),
    ],
    sourcemap: env === dev ? 'inline' : false,
    input: './src/index.tsx',
    external: ['react', 'react-dom'],
};

if (env === 'es' || env === 'cjs') {
    config.output = { format: env };
    config.external = ['symbol-observable'];
    config.plugins.push(
        babel({
            plugins: ['external-helpers'],
        })
    )
}

if (env === 'development' || env === 'production') {
    config.output = { format: 'umd' };
    config.name = 'Redux';
    config.plugins.push(
        nodeResolve({
            jsnext: true
        }),
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers'],
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    )
}

if (env === 'production') {
    config.plugins.push(
        uglify({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false
            }
        })
    )
}

function parseNodeEnv(nodeEnv) {
    if (nodeEnv === prod || nodeEnv === dev) {
        return nodeEnv;
    }
    return dev;
}

export default config;
