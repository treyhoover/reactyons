import React from "react";
import styled from "styled-components";
import c from "classnames";
import { Button } from "reactyons";

const skins = {
  "default": "bg-gray white hover-bg-dark-gray",
  "primary": "bg-blue white hover-bg-dark-blue",
};

const StyledButton = styled(
  ({ verticalAlign, stack, skin, ...props }) => <Button {...props} />
).attrs({
  className: p =>
    c(
      `v-${p.verticalAlign}`,
      "tc",
      "bg-animate",
      "pointer",
      "ph3 pv2",
      "outline-0",
      skins[p.skin],
      {
        "bn": !p.ba,
        "db w-100 dib-ns w-auto-ns": p.stack,
      }
    )
})`
    &[type="button"],
    &[type="submit"] {
      appearance: none;
    }

    height: 2.25em;
  `;

StyledButton.defaultProps = {
  type: "button",
  verticalAlign: "top",
  skin: "default",
  stack: true
};

export default StyledButton;
