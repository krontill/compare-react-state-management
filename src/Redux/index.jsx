import * as React from 'react';
import {Provider} from "react-redux";
import {Counter} from "./Counter";
import {store} from "./store";

export const Redux = () => (
  <div>
    <h1>Redux</h1>
    <Provider store={store}>
      <Counter/>
    </Provider>
    <p>
      react-redux@8.0.2 -
      MINIFIED - 14.7kB,
      MINIFIED + GZIPPED - 4.7kB,
      tree-shakeable,
      6 dependencies
    </p>
    <p>
      Состояние хранится в одном store, после его создания оборачиваем в Provider приложение и передаем в него store.
      Редюсеры, определяют как будет обновляться состояние и являются чистыми функциями. Их добавляем в наш store.
      Далее создаем действие (action), объект, описывающий, что произошло, и диспатчим его.
    </p>
    <p>
      Устарел и рекомендуется использовать Redux Toolkit. Можно использовать с Vanilla.js, TS и React.js. Есть
      time-travel дебагинг. Состояние выступает в роли единого источника истины. Иммутабельность. Много "boilerplate"
      кода.
    </p>
    <p>
      <a
        href="https://changelog.com/posts/when-and-when-not-to-reach-for-redux" rel="nofollow">When (and when not) to
        reach for Redux</a>
    </p>
    <hr/>
  </div>
);
