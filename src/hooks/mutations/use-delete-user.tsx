import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '~/utils/request';

export const useDeleteUser = (id: number) => {
    const queryClient = useQueryClient();

    const deleteUser = useMutation({
        mutationFn: () => axiosInstance.delete(`users/${id}`),
        onSuccess: () => {
            // Invalidate any queries that might depend on the user list

            alert('User deleted successfully!');
        },
        onError: (error: any) => {
            console.error('Failed to delete user:', error);
            alert('Failed to delete the user. Please try again.');
        },
    });

    return deleteUser;
};
