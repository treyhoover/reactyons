import React, { Component } from 'react';
import { Div } from "reactyons";
import Button from "./Button";

class App extends Component {
  render() {
    return (
      <Div pa4>
        <Div flex flex-wrap mb4>
          <Button mr2-ns mb2>Default Button</Button>
          <Button mr2-ns mb2 color="primary">Primary Button</Button>
          <Button mr2-ns mb2 color="default--ghost">Default Ghost Button</Button>
          <Button mr2-ns mb2 color="primary--ghost">Primary Ghost Button</Button>
          <Button
            mr2-ns
            mb2
            color={false}
            bg-animate
            bg-hot-pink
            hover-bg-light-purple
            white
            bn
            br-pill
          >
            Custom Color
          </Button>
        </Div>

        <Div flex flex-wrap items-end>
          <Button mr2-ns mb2 size="tiny">Tiny</Button>
          <Button mr2-ns mb2 size="small">Small</Button>
          <Button mr2-ns mb2 size="medium">Medium</Button>
          <Button mr2-ns mb2 size="large">Large</Button>
          <Button
            mr2-ns
            mb2
            size={false}
            f1
            pa1
          >
            Custom Size
          </Button>
        </Div>
      </Div>
    );
  }
}

export default App;
