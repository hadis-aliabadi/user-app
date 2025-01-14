import React from 'react';

interface MenuItem {
    component: React.ReactNode;
    onClick?: () => void;
}

interface ComponentProps {
    menu: MenuItem[];
}

export const TableActionSelector = ({ menu }: ComponentProps) => {
    return (
        <div className="flex justify-center items-center py-2">
            {menu.map((item, index) => (
                <span key={index} onClick={item?.onClick} className="mx-2">
                    {item.component}
                </span>
            ))}
        </div>
    );
};
