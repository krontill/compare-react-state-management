import * as React from 'react';
import { Provider } from "react-redux";
import {Counter} from "./Counter";
import {store} from "./store";

export const Redux = () => (
  <div>
    <h1>Redux</h1>
    <Provider store={store}>
      <Counter />
    </Provider>
    <p>
      react-redux@8.0.2 -
      MINIFIED - 14.7kB,
      MINIFIED + GZIPPED - 4.7kB,
      tree-shakeable,
      6 dependencies
    </p>
    <hr/>
  </div>
);
