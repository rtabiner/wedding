import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Introduction from './Introduction/Introduction';
import Accommodation from './Accommodation/Accommodation';
import Travel from './Travel/Travel';
import RSVP from './Rsvp/Rspv';
import Navigation from './Layout/Navigation';
import ring_logo from './Images/ring_logo.png';

const App = () => (
  <div className="App">
    <header className="App-header">
      <div className="App-title">
        <span>Áine </span>
        <img alt="logo" className="titleImage" src={ring_logo} />
        <span> Rob</span>
      </div>
    </header>
    <Navigation />
    <div className="app-content">

      <Switch>
        <Route exact path="/" component={Introduction} />
        <Route path="/Travel" component={Travel} />
        <Route path="/Accommodation" component={Accommodation} />
        <Route path="/RSVP" component={RSVP} />
      </Switch>

    </div>
  </div>
);


export default App;
