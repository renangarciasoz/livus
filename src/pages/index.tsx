import { Typography, Box } from '@material-ui/core';
import { CreatorPageLayout } from 'layouts';
import React from 'react';

export default function CreatorPage(): React.ReactElement {
  return (
    <CreatorPageLayout title="Livus" description="Livus">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
      >
        <Typography variant="h3">Em construção</Typography>
      </Box>
    </CreatorPageLayout>
  );
}
