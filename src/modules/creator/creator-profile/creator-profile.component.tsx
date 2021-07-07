import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useStyles } from './creator-profile.styles';

type Props = {
  cover: string;
  name: string;
  headline: string;
  image: string;
};

export const CreatorProfileComponent = ({
  cover,
  name,
  headline,
  image,
}: Props) => {
  const classes = useStyles({ cover });
  return (
    <div className={classes.root}>
      <Container>
        <Grid container alignItems="flex-end">
          <Grid item xs={2}>
            {image ? (
              <img
                src={image}
                width={170}
                height={170}
                className={classes.photo}
                alt={name}
              />
            ) : (
              <Skeleton width={170} height={170} />
            )}
          </Grid>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography variant="h2" className={classes.creatorName}>
                {name ? name : <Skeleton />}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                className={classes.creatorHeadline}
              >
                {headline ? headline : <Skeleton />}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
