import React from "react";

export class NotYetStartedGameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game_summary: props.game_summary
    };
  }


  render() {
    return <div className="not-yet-started game-summary">
      Game Id: {this.state.game_summary.game_id}
      Num Players: {this.state.game_summary.num_players}
      Status: {this.state.game_summary.status}
    </div>
  }
}
