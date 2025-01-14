import { useMutation } from '@tanstack/react-query';
import axiosInstance from '~/utils/request';

export const useUpdateUser = (id: string) => {
    const updateUser = useMutation({
        mutationFn: (data: { name: string; job: string }) => axiosInstance.put(`users/${id}`, data),
    });

    return updateUser;
};
