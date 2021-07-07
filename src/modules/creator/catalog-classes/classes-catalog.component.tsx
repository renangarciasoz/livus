import { Typography, Container, Grid } from '@material-ui/core';
import { Classes } from '@types';
import Slider from 'react-slick';
import { useStyles } from './classes-catalog.styles';
import { VideoCard } from 'ui/video-card';

type Props = {
  classes: Classes[];
  title: string;
};

export const ClassesCatalogComponent = ({ classes, title }: Props) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Container>
        <Typography variant="h5" className={styles.title}>
          {title}
        </Typography>
        <Slider slidesToShow={3} swipeToSlide={true} focusOnSelect={true}>
          {classes.map((clas) => (
            <VideoCard
              key={clas.id}
              title={clas.title}
              description={clas.description}
              thumbnailUrl={clas.thumbnail_url}
            />
          ))}
        </Slider>
      </Container>
    </div>
  );
};
