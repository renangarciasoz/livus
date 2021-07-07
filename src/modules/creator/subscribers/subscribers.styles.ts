import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: spacing(4, 0),
  },
  pagination: {
    margin: spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },
  tableNameCell: {
    maxWidth: 90,
    '& .MuiTypography-root': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
}));
