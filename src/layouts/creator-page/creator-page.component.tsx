import React from 'react';
import Head from 'next/head';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './creator-page.styles';

// TODO: Should fix grid by figma
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
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={2}>
            Logo
          </Grid>
          <Grid xs={6} />
          <Grid container item xs={2}>
            <Grid item xs={3}>
              Entrar
            </Grid>
            <Grid item xs={9}>
              Seja um Anfitrião
            </Grid>
          </Grid>
          <Grid xs={1} />
        </Grid>
      </header>
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>
        <Grid container>
          <Grid item xs={1} />

          <Grid item xs={2}>
            Logo
          </Grid>

          <Grid item xs={1} />

          <Grid container xs={7}>
            <Grid container item xs={6}>
              <Grid item container xs={6}>
                <Grid item xs={12}>
                  <Typography>
                    <strong>Comunidade</strong>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  Creator Community
                </Grid>
              </Grid>

              <Grid item container xs={6}>
                <Grid item xs={12}>
                  <strong> Social</strong>
                </Grid>
                <Grid item xs={12}>
                  Instagram
                </Grid>
                <Grid item xs={12}>
                  Linkedin
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={6}>
              <Grid container item xs={6}>
                <Grid item xs={12}>
                  <strong>Empresa</strong>
                </Grid>
                <Grid item xs={12}>
                  Sobre a Livus
                </Grid>
                <Grid item xs={12}>
                  Vagas
                </Grid>
              </Grid>

              <Grid container item xs={6}>
                <Grid item xs={12}>
                  <strong>Ajudas</strong>
                </Grid>
                <Grid item xs={12}>
                  Fale Conosco
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </footer>
    </>
  );
};
