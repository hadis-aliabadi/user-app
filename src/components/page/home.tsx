import { NavLink } from 'react-router';
import { Button } from '../ui/button';

function Home() {
    return (
        <div className="h-screen flex items-center justify-center">
            <Button>
                <NavLink to="/auth/login">برو به لاگین </NavLink>
            </Button>
        </div>
    );
}

export default Home;
