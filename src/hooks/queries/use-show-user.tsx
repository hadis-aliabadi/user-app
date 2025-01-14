import { useQuery } from '@tanstack/react-query';

import axiosInstance from '~/utils/request';

export const useShowUser = (id: string) => {
    const userQuery = useQuery<any>({
        queryKey: ['show-user'],
        queryFn: () => axiosInstance.get(`users/${id}`).then((res) => res.data),
        refetchInterval: 60000,
        staleTime: 0,
        initialData: null,
        enabled: true,
        retry: false,
    });

    return userQuery;
};
