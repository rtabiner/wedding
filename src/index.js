import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './Style/Theme';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <MuiThemeProvider theme={theme}>  
        <BrowserRouter>      
        <App />
        </BrowserRouter>
    </MuiThemeProvider>
, document.getElementById('root'));