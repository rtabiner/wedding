import React, { PureComponent } from 'react';
import './App.css';
import * as emailjs from 'emailjs-com';
import { Formik } from 'formik';
import { Button, Tabs, Tab } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core';
import Rsvp from './Rsvp/Rspv';

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Áine and Rob</h1>
        </header>
        <div className="App-Nav">
          <Tabs>
            <Tab label="Travel + Accomodation" />
            <Tab label="The Day" />
            <Tab label="Things to do" />
            <Tab label="RSVP" />
            </Tabs>
        </div>

        <Rsvp />
        <div className="rsvp-footer">
          RSVP
        </div>
      </div>
    );
  }
}

export default App;
