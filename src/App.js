import React from 'react';
import ReactGA from 'react-ga';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Introduction from './Introduction/Introduction';
import Accommodation from './Accommodation/Accommodation';
import Travel from './Travel/Travel';
import RSVP from './Rsvp/Rspv';
import Credits from './Credits/Credits';
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
        <Route path="/Credits" component={Credits} />
      </Switch>

      {ReactGA.initialize('UA-129831790-1')}
      {ReactGA.pageview(window.location.hash)}
    </div>
    <br />
    <Link className="plain-link credits" to="/Credits">Credits</Link>
  </div>
);


export default App;
