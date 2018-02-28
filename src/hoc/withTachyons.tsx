import * as React from "react";
import defaultTachyons from "../constants/classNames";

const ReactyonsContext = React.createContext({});

const isValidClassName = str => typeof str === "string" && str.length > 0;

export class ReactyonsProvider extends React.Component<IReactyonsProviderProps> {
    static defaultProps;

    render() {
        return (
            <ReactyonsContext.Provider value={this.props.tachyons}>
                {this.props.children}
            </ReactyonsContext.Provider>
        );
    }
}

ReactyonsProvider.defaultProps = {
    options: {},
};

export interface IReactyonsProviderProps {
    tachyons: {
        [key: string]: any;
    }
}

const withState = WrappedComponent => props => (
    <ReactyonsContext.Consumer>
        {tachyons => <WrappedComponent tachyons={tachyons} {...props} />}
    </ReactyonsContext.Consumer>
);

export default (WrappedComponent) => withState(class ComponentWithEventProps extends React.PureComponent<IWrappedComponentProps, any> {
    constructor(props) {
        super(props);

        const val = props.tachyons;
        const hasOptions = Boolean(val) && typeof val === "object";
        const options = hasOptions ? val : {};
        const tachyons = Object.assign({}, defaultTachyons, options);

        this.state = {
            tachyons,
        };
    }

    render() {
        const { tachyons } = this.state;
        let passThroughProps = {};
        let propClasses = [this.props.className];

        Object.keys(this.props).forEach(key => {
            if (!tachyons[key]) {
                passThroughProps[key] = this.props[key];
            } else if (Boolean(this.props[key])) {
                propClasses.push(key);
            }
        });

        return (
            <WrappedComponent
                {...passThroughProps}
                className={propClasses.filter(isValidClassName).join(" ")}
            />
        );
    }
})

interface IWrappedComponentProps extends React.HTMLAttributes<any> {

}
