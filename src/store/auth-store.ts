import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
    token: string | null;
    setAccessToken: (token: string) => void;
    login: (token: string) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,

            setAccessToken: (token: string) => {
                set({ token });
            },

            login: (token: string) => {
                set({ token });
            },

            logout: () => {
                set({ token: null });
            },
        }),
        {
            name: 'auth-storage', // Key for localStorage
            partialize: (state) => ({ token: state.token }), // Only persist the `token` field
        },
    ),
);
