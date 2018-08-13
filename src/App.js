import React, { PureComponent } from 'react';
import './App.css';
import Introduction from './Introduction/Introduction';
import RSVP from './Rsvp/Rspv';
import Navigation from './Layout/Navigation';
import { Switch, Route} from 'react-router-dom';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Áine and Rob</h1>
        </header>
          <Navigation />
        <div className="app-content">

        <Switch>
      <Route exact path='/' component={Introduction}/>
      <Route path='/RSVP' component={RSVP}/>
    </Switch>
        </div>
      </div>
    );
  }
}

export default App;
