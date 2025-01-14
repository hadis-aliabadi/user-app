import { useQuery } from '@tanstack/react-query';
import type { PaginatedUsersResponse } from '~/types/user';
import axiosInstance from '~/utils/request';

export const usePaginatedUsers = (page: number) => {
    return useQuery<PaginatedUsersResponse>({
        queryKey: ['users', page],
        queryFn: async () => {
            const response = await axiosInstance.get(`users?page=${page}`);
            return response.data;
        },
        staleTime: 5000,
    });
};
