import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { theme } from './Style/Theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
