import React from "react";
import Button from "@material-ui/core/Button/Button";
import Select from "@material-ui/core/Select/Select";


function renderMenuItem(value) {
  return <option value={value} key={value}>{value}</option>
}

export function HintSelector(props) {
  const renderedMenu = props.choices.map(choice => renderMenuItem(choice));

  return <div className="HintSelector">
    <Select native defaultValue="help test">
      {renderedMenu}
    </Select>
    <Button className="hint" variant="contained" color="primary" onClick={props.onClick}>
      {props.title}
    </Button>
  </div>;
}