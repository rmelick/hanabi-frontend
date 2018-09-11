import React from "react";

export function DrawPile(props) {
  return <div className="draw-pile">Draw Pile: {props.draw_pile.tiles_remaining}</div>
}