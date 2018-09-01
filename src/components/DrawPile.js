import React from "react";

export function DrawPile(props) {
  return <div className="drawPile">Draw Pile: {props.draw_pile.tiles_remaining}</div>
}