import React from "react";
import {OtherPlayerHand} from "./OtherPlayerHand";
import {ThisPlayerHand} from "./ThisPlayerHand";

function renderPlayerHand(player, hints) {
  return <OtherPlayerHand player={player} hints={hints} key={player.id}/>;
}

function renderThisPlayerHand(player) {
  return <ThisPlayerHand player={player} key={player.id}/>;
}

export function PlayerHands(props) {
  const status = 'Next player: X';
  const thisPlayer = renderThisPlayerHand(props.players.this_player);
  const otherPlayers = props.players.other_players.map(player => renderPlayerHand(player, props.hints[player.id]));

  return (
    <div>
      <div className="status">{status}</div>
      {thisPlayer}
      {otherPlayers}
    </div>
  );
}