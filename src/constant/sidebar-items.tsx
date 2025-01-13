import { SquareTerminal } from 'lucide-react';
import { FA_IR } from '~/assets/language/Fa_IR';
import type { MenuType } from '~/types/menu';

export const getSidebarMenus: () => MenuType[] = () => [
    {
        title: 'منو',
        items: [
            {
                title: FA_IR.users,
                url: '#',
                icon: SquareTerminal,
                isActive: true,
                items: [
                    {
                        title: 'ایجاد کاربر جدید',
                        url: '#',
                    },
                    {
                        title: '',
                        url: '#',
                    },
                ],
            },
        ],
    },
];
