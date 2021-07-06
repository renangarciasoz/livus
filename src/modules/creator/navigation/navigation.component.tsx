import React from 'react';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import { useStyles } from './navigation.styles';

export const NavigationComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={2}>
            <Typography variant="h5">
              <strong>
                <Link href="!#">Assinantes</Link>
              </strong>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h5" style={{ opacity: 0.4 }}>
              <strong>
                <Link href="!#">Cursos</Link>
              </strong>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
