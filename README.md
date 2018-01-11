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

Check out the [Tachyons Docs](http://tachyons.io/docs/) for more.
