import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
