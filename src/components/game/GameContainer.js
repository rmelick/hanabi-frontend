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
    fetch(`http://192.168.1.73:8080/games/${this.props.match.params.game_id}/summary`)
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
          return <NotYetStartedGameContainer
            player_id={this.props.player_id}
            player_name={this.props.player_name}
            game_summary={this.state.game_summary}
            refreshGameSummaryFunction={() => this.refreshGameSummary()}
          />;
        case "IN_PROGRESS":
          return <InProgressGameContainer
            player_id={this.props.player_id}
            player_name={this.props.player_name}
            game_summary={this.state.game_summary}
          />;
        case "COMPLETED":
          return <CompletedGameContainer
            player_id={this.props.player_id}
            player_name={this.props.player_name}
            game_summary={this.state.game_summary}
          />;
        default:
          return `Unknown game status for game ${this.props.match.params.game_id}: ${this.state.game_summary.status}`
      }
    } else {
      return "";
    }

  }
}
