import React from "react";
import {Tile} from "./Tile";

function renderTile(tile) {
  return <Tile tile={tile} key={tile.public_id}/>
}

export function PlayerHand(props) {
  const renderedTiles = props.player.tiles.map(tile => renderTile(tile));
  return (
    <div className="player-hand">
      {props.player.name}
      {renderedTiles}
    </div>
  );
}