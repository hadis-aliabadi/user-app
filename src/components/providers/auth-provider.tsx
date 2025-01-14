import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuthStore } from '~/store/auth-store';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [initial, setInitial] = useState(true);
    const token = useAuthStore((state) => state.token);
    const logout = useAuthStore((state) => state.logout);

    useEffect(() => {
        if (token) {
            if (location.pathname.startsWith('/auth')) {
                navigate('/dashboard');
            }
        } else {
            if (location.pathname.startsWith('/dashboard')) {
                logout();
                navigate('/auth/login', { state: { from: location } });
            }
        }
    }, [token, location, logout, navigate]);

    return children;
};
