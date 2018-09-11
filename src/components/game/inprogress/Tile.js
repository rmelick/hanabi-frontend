import React from "react";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

function formatHint(hint) {
  if (hint.color) {
    return `${hint.color}`
  } else if (hint.rank) {
    return `${hint.rank}`
  }
}

function formatHints(hint_information) {
  let hintString = "";
  if (hint_information.positive_hints_given && hint_information.positive_hints_given.length > 0) {
    hintString += "Positive:\n";
    hintString += hint_information.positive_hints_given.map(hint => `${formatHint(hint)}\n`);
  }
  if (hint_information.negative_hints_given && hint_information.negative_hints_given.length > 0) {
    hintString += "Negative:\n";
    hintString += hint_information.negative_hints_given.map(hint => `${formatHint(hint)}\n`);
  }
  return hintString
}

export function Tile(props) {
  let formattedHints;
  if (props.tile.hint_information) {
    formattedHints = formatHints(props.tile.hint_information);
  } else {
    formattedHints = "No Hints Available"
  }
  return (
    <Tooltip title={formattedHints}>
      <button className={`tile color-${props.tile.color}`} onClick={props.onClick}>
        {props.tile.rank ? props.tile.rank : ''}
      </button>
    </Tooltip>
  );
}