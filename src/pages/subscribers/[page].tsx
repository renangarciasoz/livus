import { CreatorPageLayout } from 'layouts/creator-page';
import { CreatorProfile, Subscribers, Navigation } from 'modules/creator';
import { Box } from '@material-ui/core';
import React from 'react';
import { NextPageContext } from 'next';
import { URL_NOT_FOUND } from 'constants/urls';

export async function getServerSideProps(ctx: NextPageContext) {
  const { page } = ctx.query;

  if (page && !['1', '2'].includes(page as string) && ctx.res) {
    ctx.res.setHeader('location', URL_NOT_FOUND);
    ctx.res.statusCode = 302;
    ctx.res.end();
    return { props: {} };
  }

  return {
    props: {},
  };
}

export default function CreatorPageByPageNumber(): React.ReactElement {
  return (
    <CreatorPageLayout>
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
