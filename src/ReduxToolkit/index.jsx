import * as React from 'react';
import { Provider } from 'react-redux';
import {Counter} from "./Counter";
import {store} from "./store";

export const ReduxToolkit = () => (
  <div>
    <h1>Redux Toolkit</h1>
    <Provider store={store}>
      <Counter />
    </Provider>
    <p>
      @reduxjs/toolkit@1.8.5 -
      MINIFIED - 39.4kB,
      MINIFIED + GZIPPED - 12.8kB,
      tree-shakeable,
      side-effect free,
      4 dependencies,
    </p>
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
