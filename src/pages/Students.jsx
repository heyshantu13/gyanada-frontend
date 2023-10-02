import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StripedTable from "../components/Table";
import { userRequest } from "../http/axiosInterceptors";

// Sample data for demonstration purposes
const studentData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    course: "Math",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    course: "Science",
  },
  // Add more data as needed
];

const filterFields = [
  "firstname",
  "middlename",
  "lastname",
  "email",
  "phone",
  "address",
  "city",
  "pincode",
  "dateOfBirth",
  "age",
  "schoolName",
  "studentClass",
  "schoolCity",
  "schoolAddress",
  "schoolPincode",
];

function Students() {
  const [searchName, setSearchName] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = async () => {
    try {
      const res = await userRequest.get(
        `/user/student?search=${searchName}&selectedFilter=${selectedFilter}&filterValue=${filterValue}`
      );
      setFilteredData(res.data.data.students);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getStudentData = async () => {
      try {
        const res = await userRequest.get(`/user/student`);
        setFilteredData(res.data.data.students);
      } catch (error) {
        console.log(error);
      }
    };
    getStudentData();
  }, []);

  console.log(filteredData)

  return (
    <div className="base--container">
      <div className="wrapper">
        <div>
          <h4>Students Manager</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin/agents">Dashboard/ Students</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Table with filtered data */}
      <div className="base--container">
        {/* Filter input */}
        <div className="container-fluid text-center">
          <div className="filter-container">
            <div className="row">
              <div className="col-md-7 mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Filter by Name"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
              </div>
              <div className="col-md-3 mb-2">
                <select
                  className="form-control"
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  value={selectedFilter}
                >
                  <option value="">Select Filter</option>
                  {filterFields.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-2 mb-2">
                <button
                  className="btn btn-primary btn-block pull-right"
                  type="button"
                  onClick={handleFilter}
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        </div>
        <StripedTable
          columns={[
            { Header: "Sr. No", accessor: "id" },
            { Header: "Name", accessor: "name" },
            { Header: "Email", accessor: "email" },
            { Header: "Phone", accessor: "phone" },
            { Header: "Course", accessor: "course" },
          ]}
          data={filteredData}
          editUrl="/edit-student" // Replace with your edit URL
          viewUrl="/view-student" // Replace with your view URL
        />
      </div>
    </div>
  );
}

export default Students;
