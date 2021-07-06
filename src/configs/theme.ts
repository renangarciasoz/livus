import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
  palette: {
    primary: {
      main: '#1A1A1A',
      contrastText: '#FFFDFB',
    },
  },
});

export default theme;
