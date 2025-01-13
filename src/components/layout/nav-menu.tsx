import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '~/components/ui/sidebar';
import type { MenuType } from '~/types/menu';

export function NavMenu({ config }: { config: MenuType }) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-[10px]">{config.title}</SidebarGroupLabel>
            <SidebarMenu>
                {config.items.map((item) =>
                    item.items && item.items.length > 0 ? (
                        <Collapsible
                            key={item.title}
                            asChild
                            defaultOpen={item.isActive}
                            className="group/collapsible"
                        >
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton tooltip={item.title}>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                        <ChevronLeft className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items?.map((subItem) => (
                                            <SidebarMenuSubItem key={subItem.title}>
                                                <SidebarMenuSubButton asChild>
                                                    <Link to={subItem.url}>
                                                        <span>{subItem.title}</span>
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    ) : (
                        <SidebarMenuButton key={item.title} tooltip={item.title}>
                            {item.icon && <item.icon />}
                            <Link to={item.url}>
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    ),
                )}
            </SidebarMenu>
        </SidebarGroup>
    );
}
