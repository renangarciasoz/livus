import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    background: palette.primary.main,
    padding: spacing(4, 0),
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  link: {
    fontWeight: 500,
    color: palette.primary.contrastText,
  },
}));
