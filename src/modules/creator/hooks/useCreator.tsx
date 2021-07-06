import { useQuery } from 'react-query';
import services from 'services';

export const useCreator = () => {
  const { isLoading, error, data } = useQuery('creatorData', () =>
    services.creator.getCreatorInfos().then((res) => res),
  );

  return { data };
};
