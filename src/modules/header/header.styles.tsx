import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    background: '#1A1A1A',
    padding: spacing(4, 0),
    color: 'white',
    position: 'sticky',
    top: 0,
  },
  link: {
    fontWeight: 500,
    color: palette.primary.contrastText,
  },
}));
