import * as React from "react";
import tachyons from "../classNames";

const isValidClassName = str => typeof str === "string" && str.length > 0;

export default (WrappedComponent) => class ComponentWithEventProps extends React.Component<IWrappedComponentProps, any> {
  render() {
    let passThroughProps = {};
    let propClasses = [this.props.className];

    Object.keys(this.props).forEach(key => {
      if (!tachyons.has(key)) {
        passThroughProps[key] = this.props[key];
      } else if (Boolean(this.props[key])) {
        propClasses.push(key);
      }
    });

    return <WrappedComponent
      {...passThroughProps}
      className={propClasses.filter(isValidClassName).join(" ")}
    />;
  }
}

interface IWrappedComponentProps extends HTMLElement<any> {

}
