import React, { useState } from 'react';

import { usePaginatedUsers } from '~/hooks/queries/use-users-list';

import { Table } from '../ui/table';
import { TableActionSelector } from '~/utils/table-action-selector';
import { TableAction } from '~/utils/table-action';
import { ChevronLeft, ChevronRight, Eye, Pencil, Trash } from 'lucide-react';
import { useDeleteUser } from '~/hooks/mutations/use-delete-user';

function DashboardHomePage() {
    const [userId, setUserId] = useState();
    const { mutate: deleteUser } = useDeleteUser(userId);

    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, isError } = usePaginatedUsers(currentPage);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleNextPage = () => {
        if (data && currentPage < data.total_pages) setCurrentPage((prev) => prev + 1);
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching data.</p>;
    console.log(data);

    const cols = React.useMemo(
        () => [
            {
                Header: 'شناسه کاربر',
                accessor: 'id',
                cellClass: 'list-item-heading w-10',
                Cell: (props: any) => <small>{props.value}</small>,
            },
            {
                Header: 'نام',
                accessor: 'first_name',
                cellClass: 'list-item-heading w-10',
                Cell: (props: string) => (
                    <>
                        <small>{props.value}</small>
                    </>
                ),
            },
            {
                Header: 'نام خانوادگی',
                accessor: 'last_name',
                cellClass: 'list-item-heading w-10',
                Cell: (props) => <small>{props.value}</small>,
            },
            {
                Header: 'ایمیل',
                accessor: 'email',
                cellClass: 'list-item-heading w-10',
                Cell: (props) => <small>{props.value}</small>,
            },

            {
                accessor: 'id',
                cellClass: 'text-muted w-10',
                Cell: (props) => (
                    <TableActionSelector
                        menu={[
                            {
                                component: TableAction({
                                    path: 'edit-user',
                                    value: props.value,
                                    icon: <Pencil color="#219ebc" />,
                                }),
                            },
                            {
                                component: TableAction({
                                    path: 'show-user',
                                    value: props.value,
                                    icon: <Eye color="#000" />,
                                }),
                            },
                            {
                                component: TableAction({
                                    icon: <Trash color="#f00 " className="cursor-pointer" />,
                                }),
                                onClick: () => {
                                    setUserId(props.value);
                                    deleteUser();
                                },
                            },
                        ]}
                    />
                ),
            },
        ],
        [],
    );

    return (
        <>
            <Table
                columns={cols}
                data={data.data}
                className="table-fixed"
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
            />
            <div className="flex items-center justify-center gap-2 my-4">
                <button
                    className="p-2 bg-gray-200 rounded disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={handlePrevPage}
                >
                    <ChevronRight />
                </button>
                <span>
                    صفحه {data?.page} از {data?.total_pages}
                </span>
                <button
                    className="p-2 bg-gray-200 rounded disabled:opacity-50"
                    disabled={currentPage === data?.total_pages}
                    onClick={handleNextPage}
                >
                    <ChevronLeft />
                </button>
            </div>
        </>
    );
}

export default DashboardHomePage;
