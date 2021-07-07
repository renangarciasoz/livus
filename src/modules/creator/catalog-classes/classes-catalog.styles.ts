import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(6, 0),
  },
  title: {
    fontWeight: 500,
    marginBottom: spacing(4),
  },
}));
