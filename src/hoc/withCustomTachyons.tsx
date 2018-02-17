import * as React from "react";
import allTachyons from "../constants/classNames";

const isValidClassName = str => typeof str === "string" && str.length > 0;

export default (options: IOptions = {}) => (WrappedComponent) =>  {
    const { overrides = {}, map = {} } = options;

    const tachyons = {
        ...allTachyons,
        ...map,
        ...overrides,
    };

    return class ComponentWithEventProps extends React.Component<IWrappedComponentProps, any> {
        render() {
            let passThroughProps = {};
            let propClasses = [this.props.className];

            Object.keys(this.props).forEach(key => {
                if (!tachyons[key]) {
                    passThroughProps[key] = this.props[key];
                } else if (Boolean(this.props[key])) {
                    const mapped = key in map ? map[key] : key;

                    propClasses.push(mapped);
                }
            });

            return <WrappedComponent
                {...passThroughProps}
                className={propClasses.filter(isValidClassName).join(" ")}
            />;
        }
    }
}

interface IOptions {
    map?: {
        [key: string]: string;
    },
    overrides?: {
        [key: string]: boolean;
    }
}

interface IWrappedComponentProps extends HTMLElement<any> {

}
