import * as React from 'react';
import {Counter} from "./Counter";

export const Zustand = () => (
  <div>
    <h1>Zustand</h1>
    <Counter/>
    <p>
      MINIFIED - 3kB,
      MINIFIED + GZIPPED - 1.1kB,
      side-effect free, 1 dependency
    </p>
    <hr/>
  </div>
);
