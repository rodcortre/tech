import { QueryClient } from 'react-query';

export function generateQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            staleTime: 10000,
            cacheTime: 12000,
            enabled: false,
            retry: false,
          },
      mutations: {
       
      },
    },
  });
}

export const queryClient = generateQueryClient();
