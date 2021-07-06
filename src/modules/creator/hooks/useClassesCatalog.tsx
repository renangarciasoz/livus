import { useQuery } from 'react-query';
import services from 'services';

export const useClassesCatalog = () => {
  const { isLoading, error, data } = useQuery('classesCatalogData', () =>
    services.classesCatalog.getClassesCatalog().then((res) => res),
  );

  return { data };
};
