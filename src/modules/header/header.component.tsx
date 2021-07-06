import React from 'react';
import { useStyles } from './header.styles';
import { Container, Grid, Link, Typography } from '@material-ui/core';
import { Logo } from 'ui/logo';

export const HeaderComponent = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Container fixed>
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <Link href="https://www.livus.com.br/">
              <Logo variant="secondary" />
            </Link>
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={1}>
            <Typography align="right">
              <Link
                href="https://app.livus.com.br/#/waitlist"
                className={classes.link}
              >
                Entrar
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography align="right">
              <Link
                href="https://app.livus.com.br/#/waitlist"
                className={classes.link}
              >
                Seja um Anfitrião
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
