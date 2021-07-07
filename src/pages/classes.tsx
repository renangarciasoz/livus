import { CreatorPageLayout } from 'layouts/creator-page';
import { CreatorProfile, Navigation, ClassesCatalog } from 'modules/creator';
import { Box } from '@material-ui/core';
import React from 'react';

export default function Home(): React.ReactElement {
  return (
    <CreatorPageLayout>
      <>
        <CreatorProfile />
        <Box height="100%" display="flex" flexDirection="column" flex="1">
          <Navigation />
          <ClassesCatalog />
        </Box>
      </>
    </CreatorPageLayout>
  );
}
