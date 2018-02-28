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
