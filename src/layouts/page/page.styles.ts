import { makeStyles } from '@material-ui/core';

// TODO: Change header, main and footer to flex
// TODO: Create color background palette to usage and change theme

export const useStyles = makeStyles(() => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 97px)',
  },
}));
