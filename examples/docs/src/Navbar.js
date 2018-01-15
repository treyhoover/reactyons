import React from "react";
import { Nav, Ul, Li, A } from "reactyons";
import Container from "./Container";

const Navbar = props => (
  <Container bg-black white {...props}>
    <Nav pv3 flex justify-between>
      <Ul pa0 ma0 list>
        <Li>Reactyons</Li>
      </Ul>

      <Ul pa0 ma0 list>
        <Li>
          <A
            href="https://github.com/treyhoover/reactyons"
            className="fa fa-github"
            target="_blank"
            rel="noopener noreferrer"
            link
            dim
            white
          />
        </Li>
      </Ul>
    </Nav>
  </Container>
);

export default Navbar;
