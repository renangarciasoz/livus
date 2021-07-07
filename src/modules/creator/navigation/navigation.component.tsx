import React from 'react';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import { useStyles } from './navigation.styles';
import { URL_CLASSES, URL_SUBSCRIBERS } from 'constants/urls';
import clsx from 'clsx';

export type Props = {
  currentNavigation: string;
};

export const NavigationComponent = ({ currentNavigation }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={2}>
            <Typography variant="h5">
              <Link
                href={URL_SUBSCRIBERS}
                className={clsx(
                  currentNavigation.includes(URL_SUBSCRIBERS)
                    ? classes.linkActive
                    : classes.link,
                )}
              >
                Assinantes
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h5">
              <Link
                href={URL_CLASSES}
                className={clsx(
                  currentNavigation.includes(URL_CLASSES)
                    ? classes.linkActive
                    : classes.link,
                )}
              >
                Cursos
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
