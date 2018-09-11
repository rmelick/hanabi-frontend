import React from "react";
import {InProgressGameContainer} from "./inprogress/InProgressGameContainer";
import {NotYetStartedGameContainer} from "./notyetstarted/NotYetStartedGameContainer";
import {CompletedGameContainer} from "./completed/CompletedGameContainer";

export class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game_id: props.match.params.game_id
    };
  }

  componentDidMount() {
    this.refreshGameSummary();
  }

  refreshGameSummary = () => {
    fetch(`http://localhost:8080/games/${this.state.game_id}/summary`)
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
    if (this.state.game_summary) {
      switch (this.state.game_summary.status) {
        case "WAITING_TO_BEGIN":
          return <NotYetStartedGameContainer game_summary={this.state.game_summary}/>
        case "IN_PROGRESS":
          return <InProgressGameContainer game_summary={this.state.game_summary}/>;
        case "COMPLETED":
          return <CompletedGameContainer game_summary={this.state.game_summary}/>;
        default:
          return `Unknown game status for game ${this.state.game_id}: ${this.state.game_summary.status}`
      }
    } else {
      return "";
    }

  }
}
