import { Link } from "react-router-dom";
import { studentData } from "../assets/TableData";
import StripedTable from "../components/Table";

const Students = () => {
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
      {/* <Link to="/admin/agents/add" > */}
       <button className="btn btn-light" disabled={"disabled"}>Add Student</button>
      {/* </Link> */}
    </div>

    <div className="base--container">
      <StripedTable
        columns={[
          { Header: "Sr. No", accessor: "id" },
          { Header: "Name", accessor: "name" },
          { Header: "Email", accessor: "email" },
          { Header: "Phone", accessor: "phone" },
          { Header: "Course", accessor: "course" },
        ]}
        data={studentData}
      />
    </div>
  </div>
  );
};

export default Students;
