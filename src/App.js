import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Welcome from './Welcome';
import All from "./All";
import NoMatch from './NoMatch';

import data from "./data/data.json";

class App extends Component {
  render() {
    const users = data.users;
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/all"
            render={(props) => <All users={users} {...props} />} />
          <Route component={NoMatch} />  
        </Switch>
      </Router>
    );
  }
}

export default App;
