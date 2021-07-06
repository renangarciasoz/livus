import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import services from 'services';

export const useSubscribers = (pageNumber = 1) => {
  const { isLoading, error, data, refetch } = useQuery(
    'subscribersData',
    () => services.subscribers.getSubscribers(pageNumber),
    { keepPreviousData: true },
  );

  useEffect(() => {
    refetch();
  }, [pageNumber]);

  return { data, currentPage: pageNumber };
};
