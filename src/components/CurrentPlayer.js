import React from "react";

function findCurrentPlayerName(players) {
  if (players.this_player.is_current_player === true) {
    return players.this_player.name
  } else {
    for (const player of players.other_players) {
      if (player.is_current_player === true) {
        return player.name
      }
    }
  }
}

export function CurrentPlayer(props) {
  return <div className="currentPlayer">CurrentPlayer: {findCurrentPlayerName(props.players)}</div>
}