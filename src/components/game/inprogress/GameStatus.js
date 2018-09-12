import React from "react";

export function GameStatus(props) {
  return <div className="game-status">
    <div>Score: {props.score}</div>
    <div>Status: {props.status}</div>
  </div>
}