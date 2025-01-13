import React from 'react';
import { cn } from '~/lib/utils';

interface TableProps extends React.HTMLProps<HTMLTableElement> {
    className?: string;
}

export default function Table({ className, ...props }: TableProps) {
    return (
        <table
            className={cn('border border-gray-400 border-separate border-spacing-0', className)}
            {...props}
        />
    );
}
