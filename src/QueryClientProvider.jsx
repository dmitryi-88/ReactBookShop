import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const createQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 5 * 60 * 1000,
                retry: 1,
                refetchOnWindowFocus: false,
            },
            mutations: {
                retry: 0,
            },
        },
    });

const QueryProvider = ({ children }) => {
    const queryClient = createQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryProvider