import React from 'react';
import Head from 'next/head';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import { useStyles } from './creator-page.styles';
import { Logo } from 'ui/logo';

// TODO: Extract texts to texts file and create looping for links.

type Props = {
  title: string;
  description: string;
  children: React.ReactElement;
};

export const CreatorPageLayout = ({
  title,
  description,
  children,
}: Props): React.ReactElement => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={classes.header}>
        <Container fixed>
          <Grid container>
            <Grid item xs={1}>
              <Link href="!#">
                <Logo variant="secondary" />
              </Link>
            </Grid>
            <Grid item xs={8} />
            <Grid item xs={1}>
              <Typography align="right">
                <Link href="!#" color="secondary">
                  Entrar
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography align="right">
                <Link href="!#" color="secondary">
                  Seja um Anfitrião
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </header>
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>
        <Container fixed>
          <Grid container>
            <Grid item xs={1}>
              <Link href="!#">
                <Logo />
              </Link>
            </Grid>

            <Grid item xs={3} />

            <Grid item container xs={2}>
              <Grid item xs={12}>
                <Typography>
                  <strong>Comunidade</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <Link href="!#">Creator Community</Link>
                </Typography>
              </Grid>
            </Grid>

            <Grid item container xs={1}>
              <Grid item xs={12}>
                <Typography>
                  <strong>Social</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <Link href="!#">Instagram</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <Link href="!#">Linkedin</Link>
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={1} />

            <Grid container item xs={1}>
              <Grid item xs={12}>
                <Typography>
                  <strong>Empresa</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <Link href="!#">Sobre a Livus</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <Link href="!#">Vagas</Link>
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={1} />

            <Grid container item xs={1}>
              <Grid item xs={12}>
                <Typography>
                  <strong>Ajudas</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <Link href="!#">Fale Conosco</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Container>
      </footer>
    </>
  );
};
