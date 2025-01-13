import { cn } from '~/lib/utils';

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    className?: string;
}

export default function TableHead({ className, ...props }: TableHeadProps) {
    return <th className={cn('px-0.5 py-1 border text-center bg-white', className)} {...props} />;
}
