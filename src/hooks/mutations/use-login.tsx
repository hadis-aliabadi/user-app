import { useMutation } from '@tanstack/react-query';
// Assuming React Router is used
import { useAuthStore } from '~/store/auth-store';
import axiosInstance from '~/utils/request';

export const useLogin = () => {
    const setToken = useAuthStore((state) => state.login); // Access the `login` action from Zustand

    return useMutation({
        mutationFn: (data: { email: string; password: string }) =>
            axiosInstance.post('login', data),
        onSuccess: ({ data: { token } }) => {
            setToken(token); // Update the token in Zustand store
            // navigate('/dashboard'); // Uncomment if navigation is required
        },
    });
};
