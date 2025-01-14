import { useMutation, useQuery } from '@tanstack/react-query';
import axiosInstance from '~/utils/request';

interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface PaginatedResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}

export const usePaginatedUsers = (page: number) => {
    return useQuery<PaginatedResponse>({
        queryKey: ['users', page],
        queryFn: async () => {
            const response = await axiosInstance.get(`users?page=${page}`);
            return response.data;
        },
        staleTime: 5000,
    });
};
