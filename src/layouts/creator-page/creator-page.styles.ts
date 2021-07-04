import { makeStyles } from '@material-ui/core';

// TODO: Change header, main and footer to flex
// TODO: Create color pallete to usage and change theme

export const useStyles = makeStyles(({ spacing }) => ({
  header: {
    background: '#1A1A1A',
    padding: spacing(4, 0),
    color: 'white',
    position: 'sticky',
    top: 0,
  },
  main: {
    height: 'calc(100vh - 80px)',
  },
  footer: {
    background: '#F6F6F4',
    padding: spacing(8, 0),
  },
}));
