import React from "react";
import Button from "@material-ui/core/Button/Button";
import PlayersList from "./PlayersList";


export default function NotYetStartedGame(props) {
  return (
    <div className="not-yet-started game-summary">
      <Button variant="contained" color="primary" onClick={props.refreshSummaryFunction}>
        Refresh State
      </Button>
      <Button variant="contained" color="primary" onClick={props.joinGameFunction}>
        Join Game
      </Button>
      <Button variant="contained" color="primary" onClick={props.startGameFunction}>
        Start Game
      </Button>
      <div>Your Name: {props.player_name}</div>
      <div>Your Id: {props.player_id}</div>
      <div>Game Id: {props.game_summary.game_id}</div>
      <div>Num Players: {props.game_summary.num_players}</div>
      <div>Status: {props.game_summary.status}</div>
      <PlayersList players={props.game_summary.players}/>
    </div>);
}