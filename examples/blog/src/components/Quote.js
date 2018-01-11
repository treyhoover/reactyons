import React from "react";
import { Blockquote } from "reactyons"
import { primary } from "../theme/index";

const blockquoteTheme = {
  [`b--${primary}`]: true,
};

export default props => (
  <Blockquote f6 f5-ns lh-copy measure i pl4 bl bw1 ma0 {...blockquoteTheme} {...props} />
);
