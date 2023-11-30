'use client';
import React, { useCallback, useMemo, useState } from 'react';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination
} from '@nextui-org/react';

import { ChevronRightLinearIcon, SearchLinearIcon } from '@/components/icons';

const users: any[] = [
  {
    id: 1,
    name: 'Tony Reichert',
    role: 'CEO',
    team: 'Management',
    status: 'active',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com'
  },
  {
    id: 2,
    name: 'Zoey Lang',
    role: 'Tech Lead',
    team: 'Development',
    status: 'paused',
    age: '25',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com'
  },
  {
    id: 3,
    name: 'Jane Fisher',
    role: 'Sr. Dev',
    team: 'Development',
    status: 'active',
    age: '22',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com'
  }
];
const statusOptions = [
  { name: 'Active', uid: 'active' },
  { name: 'Paused', uid: 'paused' },
  { name: 'Vacation', uid: 'vacation' }
];
const statusColorMap = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning'
};
const columns = [
  { name: 'ID', uid: 'id', sortable: true },
  { name: 'NAME', uid: 'name', sortable: true },
  { name: 'AGE', uid: 'age', sortable: true },
  { name: 'ROLE', uid: 'role', sortable: true },
  { name: 'TEAM', uid: 'team' },
  { name: 'EMAIL', uid: 'email' },
  { name: 'STATUS', uid: 'status', sortable: true },
  { name: 'ACTIONS', uid: 'actions' }
];

const INITIAL_VISIBLE_COLUMNS = ['name', 'role', 'status', 'actions'];

export function AlgoList() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterValue, setFilterValue] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );

  const [sortDescriptor, setSortDescriptor] = useState({
    column: 'age',
    direction: 'ascending'
  });

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== 'all' &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredUsers;
  }, [hasSearchFilter, statusFilter, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns.has('all')) return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [items, sortDescriptor.column, sortDescriptor.direction]);

  const renderCell = React.useCallback((user: any, columnKey: string) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case 'name':
        return (
          <User
            avatarProps={{ radius: 'lg', src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case 'role':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-small capitalize'>{cellValue}</p>
            <p className='text-bold text-tiny capitalize text-default-400'>
              {user.team}
            </p>
          </div>
        );
      case 'status':
        return (
          <Chip className='capitalize' size='sm' variant='flat'>
            {cellValue}
          </Chip>
        );
      default:
        return cellValue;
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue('');
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue('');
    }
  }, []);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const topContent = React.useMemo(() => {
    return (
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between gap-3 items-end'>
          <Input
            isClearable
            className='w-full sm:max-w-[44%]'
            placeholder='Search by name...'
            startContent={<SearchLinearIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className='flex gap-3'>
            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown> */}
            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronRightLinearIcon className="text-small" />} variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown> */}
            {/* <Button color="primary" endContent={<PlusIcon />}>
              Add New
            </Button> */}
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-default-400 text-small'>
            Total {users.length} users
          </span>
          <label className='flex items-center text-default-400 text-small'>
            Rows per page:
            <select
              className='bg-transparent outline-none text-default-400 text-small'
              onChange={onRowsPerPageChange}
            >
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, onSearchChange, onRowsPerPageChange, onClear]);

  const bottomContent = useMemo(() => {
    return (
      <div className='py-2 px-2 flex justify-between items-center'>
        <span className='w-[30%] text-small'>All: 300</span>
        <Pagination
          isCompact
          showControls
          showShadow
          color='primary'
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className='hidden sm:flex w-[30%] justify-end gap-2'>
          <Button
            isDisabled={pages === 1}
            size='sm'
            variant='flat'
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size='sm'
            variant='flat'
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [onNextPage, onPreviousPage, page, pages]);

  return (
    <Table
      aria-label='Example table with custom cells, pagination and sorting'
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement='outside'
      classNames={{
        wrapper: 'max-h-[382px] bg-content1/30 '
      }}
      selectedKeys={selectedKeys}
      selectionMode='multiple'
      // sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement='outside'
      // onSelectionChange={setSelectedKeys}
      // onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No users found'} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey: any) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
