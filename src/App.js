import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Herosearch from './components/Herosearch';
import Herohistory from './components/Herohistory';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/herosearch" component={Herosearch} />
            <Route exact path="/herohistory" component={Herohistory} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
