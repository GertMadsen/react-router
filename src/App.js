import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import data from "./data/data.json";
import Welcome from './Welcome';
import All from "./All";


class App extends Component {
  render() {
    return (
      <Router>      
        <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/all"
            render={ (props) => <All data= {data} {...props} />}/>
        </Switch>

      </Router>
    );
  }
}

export default App;
