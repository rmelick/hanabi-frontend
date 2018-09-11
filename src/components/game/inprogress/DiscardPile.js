import React from "react";
import {Tile} from "./Tile";

function renderTile(tile) {
  return <Tile tile={tile} key={tile.public_id}/>
}

export function DiscardPile(props) {
  const renderedTiles = props.discard_pile.tiles.map(tile => renderTile(tile));
  return (
    <div className="discard-pile">
      Discard Pile
      {renderedTiles}
    </div>
  );
}