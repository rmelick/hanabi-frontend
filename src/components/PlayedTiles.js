import React from "react";
import {Tile} from "./Tile";

function renderTile(tile) {
  return <Tile tile={tile} key={tile.public_id}/>
}

export function PlayedTiles(props) {
  const renderedTiles = props.tiles.map(tile => renderTile(tile));
  return (
    <div className="player-tiles">
      {props.color}
      {renderedTiles}
    </div>
  );
}