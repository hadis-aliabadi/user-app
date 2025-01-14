import { NavLink, useParams } from 'react-router';
import { useShowUser } from '~/hooks/queries/use-show-user';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';

import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from '../ui/button';

function ShowUser() {
    const params = useParams();
    const { data: showUser, isLoading } = useShowUser(params.id ?? '');
    if (isLoading) return <div>Loading ...</div>;
    return (
        <div className="flex justify-center items-center">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle className="text-center">
                        {showUser?.data.first_name} {showUser?.data.last_name}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <Avatar className="flex items-center justify-center  mb-2">
                        <AvatarImage src={showUser?.data.avatar} alt="user-avatar" />
                    </Avatar>
                    {showUser?.data.email}
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">
                        <NavLink to="/dashboard">بازگشت</NavLink>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default ShowUser;
