import React from "react";
import Button from "@material-ui/core/Button/Button";
import {PlayerHands} from "./PlayerHands";
import {DrawPile} from "./DrawPile";
import {DiscardPile} from "./DiscardPile";
import {Board} from "./Board";

export function Game(props) {
  return (
    <div className="game">
      <Button variant="contained" color="primary" onClick={props.newGameFunction}>
        New Game
      </Button>
      <Button variant="contained" color="primary" onClick={props.refreshGameStateFunction}>
        Refresh Game State
      </Button>
      <div className="player-hands">
        <PlayerHands players={props.game.players}/>
      </div>
      <div className="draw-pile">
        <DrawPile draw_pile={props.game.draw_pile}/>
      </div>
      <div className="discard-pile">
        <DiscardPile discard_pile={props.game.discard_pile}/>
      </div>
      <div className="board">
        <Board board={props.game.board}/>
      </div>
      <div className="game-info">
        <div>Clues Remaining: {props.game.clues_remaining}</div>
        <ol>Mistakes Remaining: {props.game.mistakes_remaining}</ol>
      </div>
    </div>
  );
}