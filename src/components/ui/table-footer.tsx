import { cn } from '~/lib/utils';

interface TableFooterProps extends React.HTMLProps<HTMLTableSectionElement> {
    className?: string;
}

export default function TableFooter({ className, ...props }: TableFooterProps) {
    return <tfoot className={cn(className)} {...props} />;
}
