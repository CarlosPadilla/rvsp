import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import createStore from './store';

const store = createStore();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root')
);
