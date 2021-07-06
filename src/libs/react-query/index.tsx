import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

import { IS_DEVELOPMENT } from 'configs/environment';

type Props = {
  children: React.ReactNode;
  dehydratedState?: unknown;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: !IS_DEVELOPMENT,
    },
  },
});

const ReactQueryProvider = ({ children, dehydratedState }: Props) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools position="bottom-right" />
    <Hydrate state={dehydratedState}>{children}</Hydrate>
  </QueryClientProvider>
);

export default ReactQueryProvider;
