import React from "react";
import { Article } from "reactyons"
import Header from "./Header";
import Container from "./Container";

export default ({ children, date, title, subtitle, author, ...props }) => (
  <Article {...props}>
    <Header
      date={date}
      title={title}
      subtitle={subtitle}
      author={author}
    />

    <Container>
      {children}
    </Container>
  </Article>
);
