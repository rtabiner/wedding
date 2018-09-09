import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c3d7d2',
    },
    secondary: {
      main: '#94b8af',
    },
    colors: {
      white: '#ffffff',
      black: '#333333',
      grey: '#f6f6f6',
    },
  },
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    fontFamily: 'Poiret One',
  },
});
