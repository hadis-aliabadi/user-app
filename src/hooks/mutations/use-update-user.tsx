import { useMutation } from '@tanstack/react-query';
import axiosInstance from '~/utils/request';

export const useUpdateUser = (id: string) => {
    const updateUser = useMutation({
        mutationFn: (data: { name: string; job: string }) => axiosInstance.put(`users/${id}`, data),
        onSuccess: () => {
            alert('User updated successfully!');
        },
        onError: (error: any) => {
            console.error('Failed to update user:', error);
            alert('Failed to update the user. Please try again.');
        },
    });

    return updateUser;
};
