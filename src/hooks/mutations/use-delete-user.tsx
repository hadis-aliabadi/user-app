import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '~/utils/request';

export const useDeleteUser = (id: number) => {
    const deleteUser = useMutation({
        mutationFn: () => axiosInstance.delete(`users/${id}`),
        onSuccess: () => {
            alert('User deleted successfully!');
        },
        onError: (error: any) => {
            console.error('Failed to delete user:', error);
            alert('Failed to delete the user. Please try again.');
        },
    });

    return deleteUser;
};
