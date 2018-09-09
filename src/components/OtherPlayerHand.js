import React from "react";
import {Tile} from "./Tile";
import {HintSelector} from "./HintSelector";

function renderTile(tile) {
  return <Tile tile={tile} key={tile.public_id} />
}


export function OtherPlayerHand(props) {
  const renderedTiles = props.player.tiles.map(tile => renderTile(tile));
  return (
    <div className="player-hand">
      {props.player.name}
      {renderedTiles}
      <HintSelector title="Color Hint" choices={props.hints.color_hints}
                    giveHintFunction={(color) => props.giveHintFunction(props.player.id, color, null)}/>
      <HintSelector title="Rank Hint" choices={props.hints.rank_hints}
                    giveHintFunction={(rank) => props.giveHintFunction(props.player.id, null, rank)}/>
    </div>
  );
}