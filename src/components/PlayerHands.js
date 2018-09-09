import React from "react";
import {OtherPlayerHand} from "./OtherPlayerHand";
import {ThisPlayerHand} from "./ThisPlayerHand";

function renderPlayerHand(player, hints, giveHintFunction) {
  return <OtherPlayerHand player={player} hints={hints} giveHintFunction={giveHintFunction} key={player.id}/>;
}

function renderThisPlayerHand(player) {
  return <ThisPlayerHand player={player} key={player.id}/>;
}

function findCurrentPlayerName(players) {
  if (players.this_player.is_current_player) {
    return players.this_player.name
  } else {
    let player;
    for (player in players.other_players) {
      if (player.is_current_player) {
        return player.name
      }
    }
  }
}

export function PlayerHands(props) {
  const status = 'Current player: ' + findCurrentPlayerName(props.players);
  const thisPlayer = renderThisPlayerHand(props.players.this_player);
  const otherPlayers = props.players.other_players.map(player => renderPlayerHand(player, props.hints[player.id], props.giveHintFunction));

  return (
    <div>
      <div className="status">{status}</div>
      {thisPlayer}
      {otherPlayers}
    </div>
  );
}