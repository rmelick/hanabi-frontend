import React from "react";
import Button from "@material-ui/core/Button/Button";
import {PlayerHands} from "./PlayerHands";
import {DrawPile} from "./DrawPile";
import {DiscardPile} from "./DiscardPile";
import {Board} from "./Board";
import {CurrentPlayer} from "./CurrentPlayer";
import {MistakesCounter} from "./MistakesCounter";
import {HintsTracker} from "./HintsTracker";
import {GameStatus} from "./GameStatus";

export function Game(props) {
  return (
    <div className="game">
      <GameStatus
        status={props.game.is_completed ? "COMPLETED" : "IN_PROGRESS"}
        score={props.game.board.scored_points}
      />
      <Button variant="contained" color="primary" onClick={props.refreshGameStateFunction}>
        Refresh Game State
      </Button>
      <CurrentPlayer players={props.game.players}/>
      <PlayerHands players={props.game.players}
                   hints={props.game.available_moves.hints}
                   giveHintFunction={props.giveHintFunction}
                   playFunction={props.playFunction}
                   discardFunction={props.discardFunction}
      />
      <DrawPile draw_pile={props.game.draw_pile}/>
      <DiscardPile discard_pile={props.game.discard_pile}/>
      <Board board={props.game.board}/>
      <MistakesCounter mistakes_remaining={props.game.mistakes_remaining}/>
      <HintsTracker hints_remaining={props.game.clues_remaining}/>
    </div>
  );
}