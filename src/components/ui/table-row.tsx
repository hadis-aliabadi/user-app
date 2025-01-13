import { cn } from '~/lib/utils';

interface TableRowProps extends React.HTMLProps<HTMLTableRowElement> {
    className?: string;
}

export default function TableRow({ className, ...props }: TableRowProps) {
    return <tr className={cn(className)} {...props} />;
}
