import type { LucideIcon } from 'lucide-react';

export type MenuItemType = {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: MenuItemType[];
};

export type MenuType = {
    title: string;
    items: MenuItemType[];
};
