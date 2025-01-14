import { useMutation } from '@tanstack/react-query';
import axiosInstance from '~/utils/request';

export const usePostUser = () => {
    const postUser = useMutation({
        mutationFn: (data: { name: string; job: string }) => axiosInstance.post('users', data),
        onSuccess: () => {
            alert('User created successfully!');
        },
        onError: (error: any) => {
            console.error('Failed to create user:', error);
            alert('Failed to create the user. Please try again.');
        },
    });

    return postUser;
};
