import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0091da',
      dark: '#00338d',
      darkAlt: '#003087',
      contrastText: '#ffffff',
      darkText: '#666666',
      error: '#bb1f4a',
    },
    colors: {
      white: '#ffffff',
      black: '#333333',
      grey: '#f6f6f6',
    },
  },
});
