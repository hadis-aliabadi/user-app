import { Card } from '../ui/card';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="flex overflow-hidden">
            <img
                src="https://picsum.photos/500"
                className="h-screen hidden lg:block w-[500px] object-cover"
            />
            <div className="flex justify-center items-center w-full h-screen">
                <Card className="p-4 ">
                    <Outlet />
                </Card>
            </div>
        </div>
    );
};

export default AuthLayout;
