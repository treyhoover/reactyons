import React from "react";
import styled from "styled-components";
import c from "classnames";
import { Button } from "reactyons";
import { bgs, fgs, borders } from "./color";
import { padding, fontSizes } from "./size";

const StyledButton = styled(
  ({ verticalAlign, stack, color, size, ...props }) => <Button {...props} />
).attrs({
  className: p => c(
    "tc",
    "pointer",
    "outline-0",
    "truncate",
    padding[p.size],
    fontSizes[p.size],
    bgs[p.color],
    fgs[p.color],
    borders[p.color],
    {
      "w-100 w-auto-ns": p.stack,
    }
  )
})`
    &[type="button"],
    &[type="submit"] {
      appearance: none;
    }
  `;

StyledButton.defaultProps = {
  color: "default",
  size: "medium",
  stack: true
};

export default StyledButton;
