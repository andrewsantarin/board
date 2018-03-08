import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import boardReducer from './board/reducer';

const reducer = combineReducers({
  form: formReducer,
  board: boardReducer,
})
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore
)(reducer);

export default store;
