import React from 'react';
import { SubscribersComponent } from './subscribers.component';
import { useSubscribers } from '../hooks/useSubscribers';
import { useRouter } from 'next/router';
import { URL_SUBSCRIBERS } from 'constants/urls';

export const Subscribers = () => {
  const router = useRouter();
  const { page } = router.query;
  const { currentPage, data } = useSubscribers(
    page ? parseInt(page as string) : 0,
  );

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    router.push(`${URL_SUBSCRIBERS}/${value}`);
  };

  return (
    <SubscribersComponent
      subscribers={data?.creator?.subscribers || []}
      currentPage={currentPage}
      handleChange={handleChange}
    />
  );
};
