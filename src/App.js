import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import Dictionary from './pages/Dictionary/Dictionary';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/dictionary/:id" component={Dictionary} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
