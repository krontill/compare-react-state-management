import * as React from 'react';
import {useStore} from 'effector-react'
import {$counter, minus, plus} from "./store";

export const Counter = () => {
  const counter = useStore($counter);

  return (
    <div>
      <button onClick={minus}>-</button>
      <span>{counter}</span>
      <button onClick={plus}>+</button>
    </div>
  );
}
