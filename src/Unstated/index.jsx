import * as React from 'react';
import {Provider} from 'unstated';
import {Counter} from "./Counter";

export const Unstated = () => (
  <div>
    <h1>Unstated</h1>
    <Provider>
      <Counter/>
    </Provider>
    <p>
      MINIFIED - 5.3kB,
      MINIFIED + GZIPPED - 1.8kB,
      tree-shakeable, 1 dependency
    </p>
    <p>
      Создаем Container, там работаем с this.state и this.setState. Далее оборачиваем компонент в Subscribe
      to=Container и внутри работает со state. И все это должно быть обёрнуто в Provider. <br/>
      Unstated предназначен как обёртка над готовыми компонентами\контекстом React.
      Судя по всему уже устарел, написан на классах, есть Warning: Legacy context API и Warning:
      componentWillReceiveProps has been renamed, and is not recommended for use. <br/>
      Используется только с React.
    </p>
    <hr/>
  </div>
);
