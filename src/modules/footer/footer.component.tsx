import React from 'react';
import { useStyles } from './footer.styles';
import { Container, Grid, Link, Typography } from '@material-ui/core';
import { Logo } from 'ui/logo';

export const FooterComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container fixed>
        <Grid container>
          <Grid item xs={1}>
            <Link href="https://www.livus.com.br/">
              <Logo />
            </Link>
          </Grid>

          <Grid item xs={3} />

          <Grid item container xs={2}>
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                className={classes.footerLinkHeader}
              >
                Comunidade
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" className={classes.footerLink}>
                <Link href="!#">Creator Community</Link>
              </Typography>
            </Grid>
          </Grid>

          <Grid item container xs={1}>
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                className={classes.footerLinkHeader}
              >
                Social
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" className={classes.footerLink}>
                <Link href="!#">Instagram</Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" className={classes.footerLink}>
                <Link href="!#">Linkedin</Link>
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={1} />

          <Grid container item xs={1}>
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                className={classes.footerLinkHeader}
              >
                Empresa
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" className={classes.footerLink}>
                <Link href="!#">Sobre a Livus</Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" className={classes.footerLink}>
                <Link href="!#">Vagas</Link>
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={1} />

          <Grid container item xs={1}>
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                className={classes.footerLinkHeader}
              >
                Ajudas
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" className={classes.footerLink}>
                <Link href="!#">Fale Conosco</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Container>
    </div>
  );
};
