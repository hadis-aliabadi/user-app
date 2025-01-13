import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
    useSidebar,
} from '~/components/ui/sidebar';
import { getSidebarMenus } from '~/constant/sidebar-items';
import { NavMenu } from './nav-menu';

import { Separator } from '../ui/separator';

import { LogOut } from 'lucide-react';
import { FA_IR } from '~/assets/language/Fa_IR';
import { useAuthStore } from '~/store/auth-store';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const sidebar = useSidebar();
    const logout = useAuthStore((state) => state.logout);

    return (
        <Sidebar side="right" collapsible="icon" {...props}>
            <SidebarHeader>
                <p>Novin dev</p>
            </SidebarHeader>
            <Separator />
            <SidebarContent>
                {getSidebarMenus().map((menu) => (
                    <NavMenu key={menu.title} config={menu} />
                ))}
            </SidebarContent>
            <SidebarFooter>
                <LogOut onClick={() => logout()} />
                {FA_IR.logOut}
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
