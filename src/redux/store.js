import { createStore } from 'redux';
import { ticTacToeReducer } from './reducers';

export const store = createStore(ticTacToeReducer);
