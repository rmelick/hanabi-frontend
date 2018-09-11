import React from "react";
import {InProgressGameContainer} from "./InProgressGameContainer";
import {NotYetStartedGameContainer} from "./NotYetStartedGameContainer";
import {CompletedGameContainer} from "./CompletedGameContainer";

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
    console.log("game state is");
    console.log(this.state);
    if (this.state.game_summary) {
      switch (this.state.game_summary.status) {
        case "WAITING_TO_BEGIN":
          return <NotYetStartedGameContainer game_id={this.state.game_id}/>
        case "IN_PROGRESS":
          return <InProgressGameContainer game_id={this.state.game_id}/>;
        case "COMPLETED":
          return <CompletedGameContainer game_id={this.state.game_id}/>
      }
    } else {
      return "";
    }

  }
}
