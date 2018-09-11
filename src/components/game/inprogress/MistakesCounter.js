import React from "react";

export function MistakesCounter(props) {
  return <div className="mistakes-counter">Mistakes Remaining: {props.mistakes_remaining}</div>
}