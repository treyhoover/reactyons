# Reactyons

```
yarn add reactyons tachyons
```

```
import React from "react";
import { Div, H1 } from "reactyons";
import "tachyons/css/tachyons.css"; // or use a custom build

class App extends React.Component {
    render() {
        return (
            <Div pa4>
                <H1 blue>Hello world!</H1>
            </Div>
        );
    }
}
```

You can also use the exported `withTachyons` HOC on any react component:

```
import React from "react";
import { withTachyons } from "reactyons";
import MyCustomButton from "./components/Button";
import "tachyons/css/tachyons.css"; // or use a custom build

const Button = withTachyons(MyCustomButton);

class App extends React.Component {
    render() {
        return (
            <Button mb2 mr2>I support tachyon props now!</Button>
        );
    }
}

```

And add support for your custom tachyons build:

```
import React from 'react';
import { Div, Span, ReactyonsProvider } from 'reactyons';
import "tachyons/css/tachyons.css";

const tachyons = {
  "bg-dark-purple": true,
};

class App extends React.Component {
  render() {
    return (
      <ReactyonsProvider tachyons={tachyons}>
        <Div bg-dark-purple vh-100 pa4 flex justify-center items-center>
          <Span sans-serif white f1>Hello world!</Span>
        </Div>
      </ReactyonsProvider>
    );
  }
}

export default App;

```

Check out the [Tachyons Docs](http://tachyons.io/docs/) for more.
