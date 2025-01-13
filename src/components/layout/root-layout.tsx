import { AuthProvider } from '../providers/auth-provider';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    );
};

export default RootLayout;
