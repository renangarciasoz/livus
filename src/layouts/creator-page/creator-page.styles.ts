import { makeStyles } from '@material-ui/core';

// TODO: Change header, main and footer to flex
// TODO: Create color background palette to usage and change theme

export const useStyles = makeStyles(({ spacing }) => ({
  header: {
    background: '#1A1A1A',
    padding: spacing(4, 0),
    color: 'white',
    position: 'sticky',
    top: 0,
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 97px)',
  },
  footer: {
    background: '#F6F6F4',
    padding: spacing(8, 0),
  },
  footerLinkHeader: {
    marginBottom: spacing(2.5),
  },
  footerLink: {
    margin: spacing(0.5, 0),
    fontWeight: 400,
  },
}));
