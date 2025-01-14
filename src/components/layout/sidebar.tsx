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

import Logo from '~/assets/images/logo.webp';
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const sidebar = useSidebar();
    const logout = useAuthStore((state) => state.logout);

    return (
        <Sidebar side="right" collapsible="icon" {...props}>
            <SidebarHeader>
                <div className="flex justify-between items-center">
                    {sidebar.open && <h3 className="font-bold">نوین دو</h3>}
                    <img src={Logo} className="w-10" />
                </div>
            </SidebarHeader>
            <Separator />
            <SidebarContent>
                {getSidebarMenus().map((menu) => (
                    <NavMenu key={menu.title} config={menu} />
                ))}
            </SidebarContent>
            <SidebarFooter>
                <div className="flex justify-between items-center">
                    {sidebar.open && <h3 className="font-bold">{FA_IR.logOut}</h3>}
                    <LogOut onClick={() => logout()} />
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
