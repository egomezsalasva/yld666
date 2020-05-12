import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home'
import Showcase from './pages/Showcase';
import AmyInner from './pages/AmyInner';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/amy27">
              <AmyInner />
            </Route>
            <Route path="/showcase">
              <Showcase />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
