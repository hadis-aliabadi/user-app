import { Outlet } from 'react-router';
import { SidebarInset, SidebarProvider } from '~/components/ui/sidebar';
import { AppSidebar } from './sidebar';
import { Header } from './header';

export default function DashboardLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header />
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
