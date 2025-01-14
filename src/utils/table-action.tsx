import type { ReactElement } from 'react';
import { NavLink } from 'react-router';

interface TableActionProps {
    path?: string;
    value?: string;

    icon: ReactElement;
}

export const TableAction = ({ path, value, icon }: TableActionProps) => {
    if (path || value) return <NavLink to={`${path}/` + value}>{icon}</NavLink>;

    return icon;
};
