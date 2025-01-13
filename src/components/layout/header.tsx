import { Separator } from '@radix-ui/react-separator';
import { Bell } from 'lucide-react';
import { SidebarTrigger } from '../ui/sidebar';

export const Header = () => {
    return (
        <header className="flex justify-between h-16 shrink-1 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ms-1" />
                <Separator orientation="vertical" className="me-2 h-4" />
            </div>
            <div className="px-4">
                <Bell />
            </div>
        </header>
    );
};
