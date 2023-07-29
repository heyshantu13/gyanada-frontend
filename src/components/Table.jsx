import { useTable, useSortBy, useFilters } from 'react-table';
import { useMemo } from 'react';
import Table from 'react-bootstrap/Table';

function StripedTable({ columns,data }) {
  const columnsData = useMemo(
    () => columns,
  );

  // Create a table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
  } = useTable({ columns, data }, useFilters, useSortBy);

  return (
    <Table striped hover {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default StripedTable;
