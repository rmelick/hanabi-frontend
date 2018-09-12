import React from "react";
import {Game} from "./Game";
import Websocket from "../../infra/Websocket";

export class InProgressGameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game_id: props.game_summary.game_id
    };
  }

  componentDidMount() {
    this.refreshGameState();
  }

  applyNewGameState(gameState) {
    this.setState({game: gameState});
  }

  refreshGameState = () => {
    fetch(`http://192.168.1.73:8080/games/${this.props.game_summary.game_id}/state`, {
      headers: {
        "X-Player-Id": this.props.player_id
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.applyNewGameState(result);
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

  giveHint = (playerId, color, rank) => {
    fetch(`http://192.168.1.73:8080/games/${this.props.game_summary.game_id}/move/hint`,
      {
        headers: {
          "X-Player-Id": this.props.player_id,
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          "player_id": playerId,
          "color": color,
          "rank": rank
        })
      })
      .then(
        (result) => {
          this.refreshGameState();
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  play = (tileIndex) => {
    console.log("play" + tileIndex);
    fetch(`http://192.168.1.73:8080/games/${this.props.game_summary.game_id}/move/play`,
      {
        headers: {
          "X-Player-Id": this.props.player_id,
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          "position": tileIndex
        })
      })
      .then(
        (result) => {
          this.refreshGameState();
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  discard = (tileIndex) => {
    fetch(`http://192.168.1.73:8080/games/${this.props.game_summary.game_id}/move/discard`,
      {
        headers: {
          "X-Player-Id": this.props.player_id,
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          "position": tileIndex
        })
      })
      .then(
        (result) => {
          this.refreshGameState();
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  render() {
    if (this.state.game) {
      return (
        <div>
        <Websocket url='http://192.168.1.73:8080/ws' topics={["/topic/all", `/topic/${this.props.game_summary.game_id}`]}
                   onMessage={(msg) => {
                     console.log("received websocket message");
                     console.log(msg);
                     this.applyNewGameState(msg);
                   }}/>
        <Game game={this.state.game}
              refreshGameStateFunction={() => this.refreshGameState()}
              giveHintFunction={(playerId, color, rank) => this.giveHint(playerId, color, rank)}
              playFunction={(tileIndex) => this.play(tileIndex)}
              discardFunction={(tileIndex) => this.discard(tileIndex)}
        />
        </div>
      );
    } else {
      return "";
    }
  }
}
