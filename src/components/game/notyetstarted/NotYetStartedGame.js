import React from "react";
import Button from "@material-ui/core/Button/Button";


export default function NotYetStartedGame(props) {
  return (
    <div className="not-yet-started game-summary">
      <Button variant="contained" color="primary" onClick={props.refreshSummaryFunction}>
        Refresh State
      </Button>
      <div>Game Id: {props.game_summary.game_id}</div>
      <div>Num Players: {props.game_summary.num_players}</div>
      <div>Status: {props.game_summary.status}</div>
    </div>);
}