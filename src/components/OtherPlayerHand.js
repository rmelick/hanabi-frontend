import React from "react";
import {Tile} from "./Tile";
import {HintButton} from "./HintButton";

function renderTile(tile) {
  return <Tile tile={tile} key={tile.public_id} />
}

function showHintModal(player) {
  console.log("showHintModal");
  console.log(player);
}

export function OtherPlayerHand(props) {
  const renderedTiles = props.player.tiles.map(tile => renderTile(tile));
  return (
    <div className="player-hand">
      {props.player.name}
      {renderedTiles}
      <HintButton onClick={() => showHintModal(props.player)}/>
    </div>
  );
}