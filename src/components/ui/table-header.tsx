import { cn } from '~/lib/utils';

interface TableHeaderProps extends React.HTMLProps<HTMLTableSectionElement> {
    className?: string;
}

export default function TableHeader({ className, ...props }: TableHeaderProps) {
    return <thead className={cn('sticky top-0 z-10 bg-white', className)} {...props} />;
}
