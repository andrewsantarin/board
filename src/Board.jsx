import React from 'react';
import { Provider } from 'react-redux';

import Board from './board/Board';
import store from './store';

export default function App(props) {
  return (
    <Provider {...{store}}>
      <Board {...props} />
    </Provider>
  );
}
