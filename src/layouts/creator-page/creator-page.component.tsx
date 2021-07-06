import React from 'react';
import { PageLayout } from '../page';

type Props = {
  title?: string;
  description?: string;
  children: React.ReactElement;
};

export const CreatorPageLayout = ({
  title,
  description,
  children,
}: Props): React.ReactElement => {
  return (
    <PageLayout title={title} description={description}>
      {children}
    </PageLayout>
  );
};
