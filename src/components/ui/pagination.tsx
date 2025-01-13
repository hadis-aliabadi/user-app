import type { Table } from '@tanstack/react-table';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Person } from '~/types/user';

export default function Pagination({ table }: { table: Table<Person> }) {
    return (
        <div className="flex gap-2">
            <button
                className="cursor-pointer border p-1"
                disabled={!table.getCanPreviousPage()}
                onClick={() => table.firstPage()}
            >
                {'<<'}
            </button>
            <button
                className="cursor-pointer border p-1"
                disabled={!table.getCanPreviousPage()}
                onClick={() => table.previousPage()}
            >
                {'<'}
            </button>
            <button
                className="cursor-pointer border p-1"
                disabled={!table.getCanNextPage()}
                onClick={() => table.nextPage()}
            >
                {'>'}
            </button>
            <button
                className="cursor-pointer border p-1"
                disabled={!table.getCanNextPage()}
                onClick={() => table.lastPage()}
            >
                {'>>'}
            </button>
            <span>
                Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </span>
        </div>
    );
}
