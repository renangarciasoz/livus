import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  footer: {
    background: '#F6F6F4',
    padding: spacing(8, 0),
  },
  footerLinkHeader: {
    marginBottom: spacing(2),
  },
  footerLink: {
    margin: spacing(0.5, 0),
    fontWeight: 400,
  },
}));
