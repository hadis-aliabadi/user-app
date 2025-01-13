import { cn } from '~/lib/utils';

interface TableBodyProps extends React.HTMLProps<HTMLTableSectionElement> {
    className?: string;
}

export default function TableBody({ className, ...props }: TableBodyProps) {
    return <tbody className={cn(className)} {...props} />;
}
