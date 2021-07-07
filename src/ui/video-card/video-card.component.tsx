import { Typography } from '@material-ui/core';
import { useStyles } from './video-card.styles';

type Props = {
  thumbnailUrl: string;
  title: string;
  description: string;
};
export const VideoCard = ({ thumbnailUrl, title, description }: Props) => {
  const classes = useStyles({ thumbnailUrl });
  return (
    <div className={classes.root}>
      <div className={classes.video}>
        <img
          alt="video play button"
          src="/play_button.svg"
          width={52}
          height={52}
          className={classes.play}
        />
        <a href="!#" className={classes.videoLink}>
          Assistir
        </a>
      </div>
      <Typography variant="body1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body1" className={classes.description}>
        {description}
      </Typography>
    </div>
  );
};
