import React from 'react';
import Head from 'next/head';
import { useStyles } from './page.styles';
import { Header } from 'modules/header';
import { Footer } from 'modules/footer';

type Props = {
  title: string;
  description: string;
  children: React.ReactElement;
};

export const PageLayout = ({
  title = 'Livus - Crie sua assinatura de conteúdos exclusivos',
  description = 'A maneira mais fácil e rápida de criar sua assinatura digital. Tenha diferentes planos, aceite pagamentos em cartão de crédito, boleto e pix, e construa sua comunidade digital, tudo no mesmo lugar.',
  children,
}: Props): React.ReactElement => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};
