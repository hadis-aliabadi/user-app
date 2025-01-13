import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuthStore } from '~/store/auth-store';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [initial, setInitial] = useState(true);
    const token = useAuthStore((state) => state.token);
    const logout = useAuthStore((state) => state.logout);

    console.log(token);
    useEffect(() => {
        if (token) {
            console.log('first');
            if (location.pathname.startsWith('/auth')) {
                console.log(location.state?.from);
                navigate('/dashboard');
            }
        } else {
            if (location.pathname.startsWith('/dashboard')) {
                console.log('33333');
                logout();
                navigate('/auth/login', { state: { from: location } });
            }
        }
    }, [token, location, logout, navigate]);

    return children;
};
