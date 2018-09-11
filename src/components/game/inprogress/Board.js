import React from "react";
import {PlayedTiles} from "./PlayedTiles";

function renderPlayedTiles(color, tiles) {
  return <PlayedTiles color={color} tiles={tiles} key={color}/>;
}

export function Board(props) {
  const tiles = props.board.played_tiles;
  const renderedTiles = Object.keys(tiles).map(color => renderPlayedTiles(color, tiles[color]));
  return (
    <div className="board">
      Board Is
      {renderedTiles}
    </div>);
}