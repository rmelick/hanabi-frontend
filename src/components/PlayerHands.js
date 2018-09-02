import React from "react";
import {OtherPlayerHand} from "./OtherPlayerHand";
import {ThisPlayerHand} from "./ThisPlayerHand";

function renderPlayerHand(player) {
  return <OtherPlayerHand player={player} key={player.id}/>;
}

function renderThisPlayerHand(player) {
  return <ThisPlayerHand player={player} key={player.id}/>;
}

export function PlayerHands(props) {
  const status = 'Next player: X';
  const thisPlayer = renderThisPlayerHand(props.players.this_player);
  const otherPlayers = props.players.other_players.map(player => renderPlayerHand(player));

  return (
    <div>
      <div className="status">{status}</div>
      {thisPlayer}
      {otherPlayers}
    </div>
  );
}