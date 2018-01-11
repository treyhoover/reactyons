import React from "react";
import { Header, Time, Small, H5, H4, H3, Span } from "reactyons"
import Container from "./Container";
import { primary } from "../theme/index";

const headerTheme = {
  [`bg-${primary}`]: true,
};

export default ({ date, title, subtitle, author, ...props }) => (
  <Header
    sans-serif
    {...headerTheme}
    {...props}
  >
    <Container>
      {date && (
        <Time f6 mb2 dib ttu tracked>
          <Small>27 July, 2015</Small>
        </Time>
      )}
      <H3 f2 f1-m f-headline-l measure-narrow lh-title mv0>
        <Span bg-black-90 lh-copy white pa1 tracked-tight>
          {title}
        </Span>
      </H3>
      {subtitle && <H4 f3 fw1 georgia i>{subtitle}</H4>}
      {author && <H5 f6 ttu tracked black-80>By {author}</H5>}
    </Container>
  </Header>
);
