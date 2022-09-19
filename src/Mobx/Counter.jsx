import * as React from 'react';
import {observer} from "mobx-react-lite";
import {CounterState} from "./CounterState";

const counter = new CounterState();

export const Counter = observer(() => (
  <div>
    <button onClick={() => counter.decrement()}>-</button>
    <span>{counter.count}</span>
    <button onClick={() => counter.increment()}>+</button>
  </div>
));
