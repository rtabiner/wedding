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
      black: '#000000',
      darkGrey: '#6a6f6a',
    },
  },
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    fontFamily: 'Poiret One',
    fontSize: 18,
  },
});
