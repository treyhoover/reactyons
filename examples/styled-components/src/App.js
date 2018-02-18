import React, { Component } from 'react';
import { Div } from "reactyons";
import Button from "./Button";

class App extends Component {
  render() {
    return (
      <Div pa4>
        <Button mr2 mb2>Default Button</Button>
        <Button mr2 mb2 skin="primary">Primary Button</Button>
        <Button mr2 mb2 bg-red hover-bg-dark-red white skin={false}>Custom Button</Button>
      </Div>
    );
  }
}

export default App;
