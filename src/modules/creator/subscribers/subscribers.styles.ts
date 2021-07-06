import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  pagination: {
    padding: spacing(3, 0),
    display: 'flex',
    justifyContent: 'center',
  },
}));
