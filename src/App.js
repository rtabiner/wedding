import React, { PureComponent } from 'react';
import './App.css';
import { Fade } from '@material-ui/core';
import Introduction from './Introduction/Introduction';
import ThingsToDo from './ThingsToDo/ThingsToDo';
import TravelAndAccommodation from './TravelAndAccommodation/TravelAndAccommodation';
import RSVP from './Rsvp/Rspv';
import Navigation from './Layout/Navigation';
import { Switch, Route} from 'react-router-dom';
import ring_logo from './Images/ring_logo.png';

const App = () => (
  <div className="App">
    <header className="App-header">
      <div className="App-title">
        <span>Áine </span>
        <img className="titleImage" src={ring_logo} />
        <span> Rob</span>
        </div>
    </header>
      <Navigation />
    <div className="app-content">

    <Switch>
  <Route exact path='/' component={Introduction}/>
  <Route path='/TravelAndAccommodation' component={TravelAndAccommodation}/>
  <Route path='/ThingsToDo' component={ThingsToDo}/>
  <Route path='/RSVP' component={RSVP}/>
  </Switch>     

    </div>
  </div>
);
  

export default App;
