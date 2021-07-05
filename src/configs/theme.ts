import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'strong, b': {
          fontWeight: 500,
        },
      },
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  palette: {
    primary: {
      main: '#1A1A1A',
    },
    secondary: {
      main: '#FFFDFB',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
