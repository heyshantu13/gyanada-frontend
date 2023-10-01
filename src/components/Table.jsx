import { useTable, useSortBy, useFilters } from "react-table";
import { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import { getImage } from "../utils/getImage";
import { BASE_URL } from "../http/axiosInterceptors";

function StripedTable({ columns, data }) {
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

  const columnsData = useMemo(() => columns);

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
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length + 1} className="text-center">
                <h4 className="text-dark">No records found</h4>
              </td>
            </tr>
          )}
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={{ textAlign: "start" }}>
                {row.cells.map((cell) => {
                  // console.log(cell.value);
                  if (cell.column.Header === "Photo") {
                    // Render the photo as an image
                    return (
                      <td {...cell.getCellProps()}>
                        <img
                          src={`http://13.232.230.93:9090/uploads/${cell?.value}`}
                          alt={cell.value}
                          style={{
                            maxWidth: "35px",
                            borderRadius: "50%",
                          }}
                        />
                      </td>
                    );
                  }
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                {/* Actions Cell */}
                <td>
                  {/* Use Font Awesome icons for "Edit" and "View" buttons */}
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleView(row.original)}
                  >
                    <i className="fas fa-eye"></i> {/* Eye icon */}
                  </button>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => handleEdit(row.original)}
                  >
                    <i className="fas fa-edit"></i> {/* Pencil icon */}
                  </button>
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
