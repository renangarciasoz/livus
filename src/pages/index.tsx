import { CreatorPageLayout } from 'layouts/creator-page';
import { CreatorProfile, Subscribers, Navigation } from 'modules/creator';
import { Box } from '@material-ui/core';
import React from 'react';

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
