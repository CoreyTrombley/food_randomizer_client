import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/:filter?" component={App} />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
