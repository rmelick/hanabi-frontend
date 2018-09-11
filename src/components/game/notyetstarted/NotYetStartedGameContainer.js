import React from "react";
import NotYetStartedGame from "./NotYetStartedGame";

export class NotYetStartedGameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game_summary: props.game_summary
    };
  }

  refreshGameSummary = () => {
    fetch(`http://localhost:8080/games/${this.state.game_summary.game_id}/summary`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({game_summary: result});
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  render() {
    return <NotYetStartedGame
      game_summary={this.state.game_summary}
      refreshSummaryFunction={() => this.refreshGameSummary()}
    />
  }
}
