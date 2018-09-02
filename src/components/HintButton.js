import React from "react";
import Button from "@material-ui/core/Button/Button";

export function HintButton(props) {
  return <Button className="hint" variant="contained" color="primary" onClick={props.onClick}>
    Give Hint
  </Button>
}