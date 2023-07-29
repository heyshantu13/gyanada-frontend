import { Link } from "react-router-dom";
import { studentData } from "../assets/TableData";
import StripedTable from "../components/Table";

const Dashboard = () => {
  const totalStudents = 100; 
  const totalAgents = 50; 
  const birthdaysToday = 5; 
  return (
    <>
    {/* Main Page Started */}
    <div className="base--container">
      {/* Breadcrumb */}
      <header className="wrapper">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin/dashboard">Dashboard</Link>
              </li>
              {/* <li className="breadcrumb-item active" aria-current="page">
                My Forms
              </li> */}
            </ol>
          </nav>
      </header>
      <div className="row">
        <div className="col bg-light p-4 rounded mt-4">
          {/* Min Content Start*/}
            <div className="dashboard-data-container">
            <div className="card--container">
              <i className="fas fa-user-graduate icon"></i>
              <h5>Total Students</h5>
              <p className="card-count">{totalStudents}</p>
            </div>
            <div className="card--container">
              <i className="fas fa-user-tie icon"></i>
              <h5>Total Agents</h5>
              <p className="card-count">{totalAgents}</p>
            </div>
            <div className="card--container">
              <i className="fas fa-birthday-cake icon"></i>
              <h5>Birthdays Today</h5>
              <p className="card-count">{birthdaysToday}</p>
            </div>
          </div>
          <div className="table--container">
            <p className="recently-joined-title">Recently Joined Students</p>
            <div className="recently-joined-table">
              <StripedTable
                columns={[
                  { Header: 'Sr. No', accessor: 'id' },
                  { Header: 'Name', accessor: 'name' },
                  { Header: 'Email', accessor: 'email' },
                  { Header: 'Phone', accessor: 'phone' },
                  { Header: 'Course', accessor: 'course' },
                ]}
                data={studentData}
              />
            </div>
          </div>
          {/* Main Content End */}
        </div>
      </div>
  </div>
  {/* Main Page End */}
  </>
  );
};

export default Dashboard;
