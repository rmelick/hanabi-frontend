import React from "react";
import example_state from "../../example_state";
import {Game} from "./Game";

export class CompletedGameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game_id: props.game_id
    };
  }


  render() {
    return `Game ${this.state.game_id} is completed`
  }
}
