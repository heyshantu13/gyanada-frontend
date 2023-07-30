import { Link } from "react-router-dom";
import { studentData } from "../assets/TableData";
import StripedTable from "../components/Table";

const Students = () => {
  return (
    <div className="base--container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/admin/students">Dashboard/ Students</Link>
          </li>
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
        </ol>
      </nav>
    </div>
  );
};

export default Students;
