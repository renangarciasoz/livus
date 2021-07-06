import { makeStyles } from '@material-ui/core';

type Props = {
  cover: string;
};

export const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    display: 'flex',
    height: '400px',
    paddingTop: spacing(5),
    alignItems: 'flex-end',
    backgroundImage: (props: Props) => `url(${props.cover})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    flex: 1,
  },
  photo: {
    width: 170,
    height: 170,
    objectFit: 'cover',
    marginBottom: spacing(-2),
  },
  creatorName: {
    color: palette.primary.contrastText,
    fontWeight: 500,
  },
  creatorHeadline: {
    color: palette.primary.contrastText,
  },
}));
