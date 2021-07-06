import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(4.5, 0),
    borderBottom: '1px solid black',
  },
}));
