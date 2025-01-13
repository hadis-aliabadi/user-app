import { useQuery } from '@tanstack/react-query';
import type { Person } from '~/types/user';

import axiosInstance from '~/utils/request';

export const useUsersList = (page: number) => {
    const userList = useQuery<Person | null>({
        queryKey: ['get-users-list'],
        queryFn: () => axiosInstance.get(`users?page=${page}`),
        refetchInterval: 60000,
        staleTime: 0,
        initialData: null,
        enabled: true,
        retry: false,
    });

    return userList;
};
