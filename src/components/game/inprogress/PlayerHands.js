import React from "react";
import {OtherPlayerHand} from "./OtherPlayerHand";
import {ThisPlayerHand} from "./ThisPlayerHand";

function renderPlayerHand(player, hints, giveHintFunction) {
  return <OtherPlayerHand player={player}
                          hints={hints}
                          giveHintFunction={giveHintFunction}
                          key={player.id}/>;
}

function renderThisPlayerHand(player, playFunction, discardFunction) {
  return <ThisPlayerHand player={player}
                         playFunction={playFunction}
                         discardFunction={discardFunction}
                         key={player.id}/>;
}


export function PlayerHands(props) {
  const thisPlayer = renderThisPlayerHand(props.players.this_player, props.playFunction, props.discardFunction);
  const otherPlayers = props.players.other_players.map(player =>
    renderPlayerHand(player, props.hints[player.id], props.giveHintFunction));

  return (
    <div className="player-hands">
      {thisPlayer}
      {otherPlayers}
    </div>
  );
}