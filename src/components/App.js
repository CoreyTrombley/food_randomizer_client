import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './Navbar';
import Randomizer from './Randomizer';
import Home from '../pages/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/randomizer" component={Randomizer} />
        </div>
      </div>
    );
  }
}

export default App;
