import * as React from 'react';
import {Counter} from "./Counter";

export const Effector = () => (
  <div>
    <h1>Effector</h1>
    <Counter/>
    <p>
      effector@22.3.0 -
      MINIFIED - 23.8kB,
      MINIFIED + GZIPPED - 10kB,
      side-effect free, no dependencies
    </p>
    <p>
      effector-react@22.3.0 -
      MINIFIED - 9.6kB,
      MINIFIED + GZIPPED - 3.6kB,
      tree-shakeable,
      side-effect free,
      1 dependency
    </p>
    <hr/>
  </div>
);
