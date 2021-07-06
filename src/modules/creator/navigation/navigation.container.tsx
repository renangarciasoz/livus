import { useRouter } from 'next/router';
import React from 'react';
import { NavigationComponent } from './navigation.component';

export const Navigation = () => {
  const router = useRouter();
  return <NavigationComponent currentNavigation={router.asPath} />;
};
