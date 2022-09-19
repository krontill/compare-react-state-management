import {createEvent, createStore} from 'effector';

export const plus = createEvent();
export const minus = createEvent();

export const $counter = createStore(0).on(plus, n => n + 1).on(minus, n => n - 1);
