import React from "react";
import {PlayerHand} from "./PlayerHand";

function renderPlayerHand(player) {
  return <PlayerHand player={player} key={player.player_index}/>;
}

export function PlayerHands(props) {
  const status = 'Next player: X';
  const renderedPlayers = props.players.map(player => renderPlayerHand(player));

  return (
    <div>
      <div className="status">{status}</div>
      {renderedPlayers}
    </div>
  );
}