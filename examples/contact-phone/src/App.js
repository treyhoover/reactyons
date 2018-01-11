import React from 'react';
import Contact from "./components/Contact";

class App extends React.Component {
  render() {
    return (
      <Contact.List>
        <Contact
          img="http://tachyons.io/img/avatar-mrmrs.jpg"
          name="Mrmrs"
          company="Medium Hexagon, LLC"
          phone="+1 (999) 555-5555"
        />
        <Contact
          img="http://tachyons.io/img/avatar-jxnblk.jpg"
          name="Jxnblk"
          company="Large Circle, Inc"
          phone="+1 (999) 555-5555"
        />
        <Contact
          img="http://tachyons.io/img/avatar-jasonli.jpg"
          name="Jason Li"
          company="Little Blue Square, Inc"
          phone="+1 (999) 555-5555"
        />
        <Contact
          img="http://tachyons.io/img/avatar-yavor.jpg"
          name="Yavor"
          company="Large Circle, Inc"
          phone="+1 (999) 555-5555"
        />
      </Contact.List>
    );
  }
}

export default App;
