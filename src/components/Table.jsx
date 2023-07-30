import { useTable, useSortBy, useFilters } from 'react-table';
import { useMemo, useState } from 'react';
import Table from 'react-bootstrap/Table';

function StripedTable({ columns,data }) {

    // State to store the data for the modal
    const [modalData, setModalData] = useState(null);

    // Function to handle the "View" action
    const handleView = (rowData) => {
      // Set the data for the modal
      setModalData(rowData);
      // TODO: Show the Bootstrap modal for view
    };
  
    // Function to handle the "Edit" action
    const handleEdit = (rowData) => {
      // Set the data for the modal
      setModalData(rowData);
      // TODO: Show the Bootstrap modal for edit
    };

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
    <div className="base--container">
      
    <Table striped hover {...getTableProps()}>
      <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </th>
              ))}
              {/* Actions Header */}
              <th>Actions</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
                {/* Actions Cell */}
                <td>
                  <button className="btn btn-sm btn-primary" onClick={() => handleView(row.original)}>View</button>
                  <button className="btn btn-sm btn-secondary" onClick={() => handleEdit(row.original)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
    </Table>
    </div>
  );
}

export default StripedTable;
