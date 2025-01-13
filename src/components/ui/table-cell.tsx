import { cn } from '~/lib/utils';

interface TableCellProps extends React.HTMLProps<HTMLTableCellElement> {
    className?: string;
}

export default function TableCell({ className, ...props }: TableCellProps) {
    return <td className={cn('px-0.5 py-1 text-center bg-white', className)} {...props} />;
}
