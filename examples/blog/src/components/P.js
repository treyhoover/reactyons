import * as React from "react";
import { withCustomTachyons } from "reactyons"

const P = withCustomTachyons({
  map: {
    "primary": "gold",
    "bg-primary": "bg-gold",
  },
  overrides: {
    "red": false,
    "custom-class": true,
  }
})(p => <p {...p} />);

export default props => (
  <P primary f5 f3-ns lh-copy measure georgia {...props} />
);
