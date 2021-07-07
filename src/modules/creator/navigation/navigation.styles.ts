import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(4.5, 0),
    borderBottom: '1px solid black',
  },
  linkActive: {
    fontWeight: 500,
    textDecoration: 'underline !important',
    opacity: 1,
  },
  link: {
    fontWeight: 500,
    opacity: 0.4,
  },
}));
