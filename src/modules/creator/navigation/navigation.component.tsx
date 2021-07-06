import React from 'react';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import { useStyles } from './navigation.styles';
import { URL_CLASSES, URL_SUBSCRIBERS } from 'constants/urls';

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
              <Link href={URL_SUBSCRIBERS}>Assinantes</Link>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h5" style={{ opacity: 0.4 }}>
              <Link href={URL_CLASSES}>Cursos</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
