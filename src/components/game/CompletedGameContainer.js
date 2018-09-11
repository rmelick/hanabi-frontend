import React from "react";

export class CompletedGameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game_summary: props.game_summary
    };
  }


  render() {
    return `Game ${this.state.game_summary.game_id} is completed`
  }
}
