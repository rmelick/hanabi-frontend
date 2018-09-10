import React from "react";
import {Tile} from "./Tile";
import {PlayDiscardSelector} from "./PlayDiscardSelector";

function renderTile(tile) {
  return <Tile tile={tile} key={tile.public_id} onClick={() => showPlayDiscardModal(tile)}/>
}

function showPlayDiscardModal(tile) {
  console.log("play/discard");
  console.log(tile);
}

export function ThisPlayerHand(props) {
  const renderedTiles = props.player.tiles.map(tile => renderTile(tile));
  return (
    <div className="player-hand">
      {props.player.name}
      {renderedTiles}
      <PlayDiscardSelector tiles={props.player.tiles}
                    playFunction={props.playFunction}
                    discardFunction={props.discardFunction}
      />
    </div>
  );
}