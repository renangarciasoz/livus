import { makeStyles } from '@material-ui/core';

type Props = {
  thumbnailUrl?: string;
};

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(1),
  },
  video: {
    position: 'relative',
    height: 172,
    background: (props: Props) =>
      `${
        props.thumbnailUrl
          ? `url(${props.thumbnailUrl}) center center no-repeat`
          : '#C4C4C4'
      }`,
  },
  videoLink: {
    transition: '0.3s',
    background: 'transparent',
    width: '100%',
    height: '100%',
    position: 'absolute',
    color: 'transparent',
    '&:hover': {
      background: 'rgba(0,0,0,0.3)',
    },
  },
  play: {
    zIndex: 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    margin: spacing(1, 0),
    fontWeight: 500,
  },
  description: {
    margin: spacing(1, 0),
  },
}));
