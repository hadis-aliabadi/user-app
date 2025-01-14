import React, { useState } from 'react';
import { cn } from '~/lib/utils';

interface Column {
    Header?: string;
    accessor?: string;
    cellClass?: string;
    Cell: (data: { value: any }) => React.ReactNode;
}

interface TableProps {
    columns: Column[];
    data: any[];
    className?: string;
}

export function Table({ columns, data, className = '' }: TableProps) {
    return (
        <div>
            {data.length > 0 ? (
                <>
                    <table className={`w-full ${className}`}>
                        <thead className="text-xs">
                            <tr>
                                {columns.map((column, columnIndex) => (
                                    <th
                                        className="text-right p-4 font-semibold"
                                        key={`th_${columnIndex}`}
                                    >
                                        <span>{column.Header}</span>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((row, rowIndex) => (
                                <tr key={`tr_${rowIndex}`}>
                                    {columns.map((cell, cellIndex) => (
                                        <td
                                            key={`td_${cellIndex}`}
                                            className={`${cell.cellClass} border-b border-gray-100 p-4`}
                                        >
                                            {cell.Cell({
                                                value: cell.accessor ? row[cell.accessor] : row,
                                            }) || '__'}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <p className="text-center py-5">No records found</p>
            )}
        </div>
    );
}
