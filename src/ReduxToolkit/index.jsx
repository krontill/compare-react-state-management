import * as React from 'react';
import {Provider} from 'react-redux';
import {Counter} from "./Counter";
import {store} from "./store";

export const ReduxToolkit = () => (
  <div>
    <h1>Redux Toolkit</h1>
    <Provider store={store}>
      <Counter/>
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
    <p>
      Создаем store, оборачиваем в Provider приложение и передаем в него store.
      Далее создается slice с именем, начальным состоянием и редюсерами, определяющими как будет обновляться состояние.
      Потом импортируем редюсер функцию из slice и добавляем в наш store.
      В компоненте используем хук useSelector чтобы прочесть данные из store и хук useDispatch, чтобы диспатчить экшены.
    </p>
    <p>
      Рекомендуемый Redux подход. Упрощен и меньше использует "boilerplate" кода.
      Иммутабельность реализована с помощью библиотеки immer.
      Вместо reselect используется createSelector.
      Redux Toolkit экспортирует некоторые из своих внутренних утилит, а также реэкспортирует дополнительные функции из
      других зависимостей, например nanoid для генерации ид.
      Есть time-travel дебагинг. Middleware.
      Можно использовать Server Side Rendering с Next.js.
      Можно использовать с TS и React.js.
    </p>
    <p>
      RTK Query предоставляется в качестве дополнения в пакете @reduxjs/toolkit.
      Он специально создан для решения задачи извлечения и кэширования данных,
    </p>
    <hr/>
  </div>
);
