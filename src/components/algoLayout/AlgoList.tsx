'use client';
import React, { useCallback, useMemo, useState } from 'react';
import NextLink from 'next/link';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Link,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  SortDescriptor
} from '@nextui-org/react';

import { allPosts, allAlgos, type Algo, MDX } from 'contentlayer/generated';
import { ChevronRightLinearIcon, SearchLinearIcon } from '@/components/icons';
import * as Local from 'contentlayer/source-files';
import { compareAsc, format } from 'date-fns';

interface AlgoType extends Algo {
  [key: string]: string | number | MDX | Local.RawDocumentData;
}
interface AlgoStatusType {
  [key: string]:
    | 'success'
    | 'danger'
    | 'warning'
    | 'default'
    | 'primary'
    | 'secondary'
    | undefined;
}

const users: AlgoType[] = allAlgos;

const statusOptions = [
  { name: 'Easy', uid: 'easy' },
  { name: 'Hard', uid: 'hard' },
  { name: 'Medium', uid: 'medium' }
];

const statusColorMap: AlgoStatusType = {
  easy: 'success',
  hard: 'danger',
  medium: 'warning'
};

const columns = [
  { name: 'ID', uid: 'id', sortable: true },
  { name: 'TITLE', uid: 'title' },
  { name: 'DATE', uid: 'date', sortable: true },
  { name: 'STATUS', uid: 'status' },
  { name: 'LEETCODE', uid: 'leetCode' }
];

const INITIAL_VISIBLE_COLUMNS = ['id', 'title', 'date', 'status', 'leetCode'];

export function AlgoList() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterValue, setFilterValue] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );

  console.log(allAlgos, 'allAlgos');

  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'id',
    direction: 'ascending'
  });

  const headerColumns = React.useMemo(() => {
    if (visibleColumns.has('all')) return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  console.log(visibleColumns, 'headerColumns');

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return filteredUsers;
  }, [hasSearchFilter, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = sortDescriptor.column ? a[sortDescriptor.column] : 0;
      const second = sortDescriptor.column ? b[sortDescriptor.column] : 1;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [items, sortDescriptor.column, sortDescriptor.direction]);

  const renderCell = React.useCallback((user: any, columnKey: string) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case 'title':
        return (
          <NextLink href={user.url} className='hover:text-default-500'>
            {user.title}
          </NextLink>
        );
      case 'leetCode':
        return (
          <Link isExternal href={user.leetCode} showAnchorIcon>
            LeetCode
          </Link>
        );
      case 'date':
        return <>{format(new Date(user.date), 'yyyy-MM-dd')}</>;
      case 'status':
        return (
          <Chip
            className='capitalize'
            color={statusColorMap[user.status]}
            size='sm'
            variant='flat'
          >
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
        <Pagination
          isCompact
          showControls
          showShadow
          // color='primary'
          classNames={{
            // wrapper: 'dark:text-algo-context-dark text-algo-context',
            // item: ' bg-transparent dark:text-algo-context-dark text-algo-context'
            wrapper: '',
            item: '',
            cursor:
              'bg-gradient-to-r from-algo-context dark:from-algo-context-dark text-white font-bold'
          }}
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
      aria-label='the problems of the leetCode algorithms'
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement='outside'
      classNames={{
        wrapper: 'max-h-[382px] bg-content1/30 '
      }}
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement='outside'
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'leetCode' ? 'center' : 'start'}
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
