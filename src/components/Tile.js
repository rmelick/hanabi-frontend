import React from "react";

export function Tile(props) {
  return (
    <button className={`tile color-${props.tile.color}`} onClick={props.onClick}>
      {props.tile.rank ? props.tile.rank : ''}
    </button>
  );
}