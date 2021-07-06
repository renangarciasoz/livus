import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { useStyles } from './creator-profile.styles';

export const CreatorProfileComponent = ({
  cover = 'https://i.redd.it/5ig2a804on731.png',
  name = 'Creator Name',
  headline = 'Creator description',
  image = 'https://i.pinimg.com/originals/8a/c6/a6/8ac6a6937ad46de77db14bb0a8f1b81b.jpg',
}) => {
  const classes = useStyles({ cover });
  return (
    <div className={classes.root}>
      <Container>
        <Grid container alignItems="flex-end">
          <Grid item xs={2}>
            <img
              src={
                image || 'https://ptsse.co.id/assets/gambar_kategori/images.png'
              }
              width={170}
              height={170}
              className={classes.photo}
              alt={`${name}`}
            />
          </Grid>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h2" className={classes.creatorName}>
                {name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                className={classes.creatorHeadline}
              >
                {headline}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
