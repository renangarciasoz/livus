import { CreatorPageLayout } from 'layouts/creator-page';
import { CreatorProfile, Subscribers, Navigation } from 'modules/creator';
import { Box } from '@material-ui/core';
import React from 'react';
import { NextPageContext } from 'next';
import { URL_SUBSCRIBERS } from 'constants/urls';

export async function getServerSideProps(ctx: NextPageContext) {
  const { page } = ctx.query;

  if (!page && ctx.res) {
    ctx.res.setHeader('location', `${URL_SUBSCRIBERS}/1`);
    ctx.res.statusCode = 302;
    ctx.res.end();
    return { props: {} };
  }
}

export default function Home(): React.ReactElement {
  return (
    <CreatorPageLayout title="Livus" description="Livus">
      <>
        <CreatorProfile />
        <Box height="100%" display="flex" flexDirection="column" flex="1">
          <Navigation />
          <Subscribers />
        </Box>
      </>
    </CreatorPageLayout>
  );
}
