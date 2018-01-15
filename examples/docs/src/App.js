import React from 'react';
import { Div } from "reactyons";
import Navbar from "./Navbar";
import Container from "./Container";

class App extends React.Component {
  render() {
    return (
      <Div h-100 sans-serif>
        <Navbar mb3 />
        <Container >
          asdf
        </Container>
      </Div>
    );
  }
}

export default App;
