import React from "react";
import example_state from "../../example_state";



export default class GameLobbyContainer extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {game_id: props.match.params.game_id};
  }

  render() {
    return <div>
      <h2>GameLobby</h2>
      {this.props.match.params.game_id}
    </div>
  }
}

