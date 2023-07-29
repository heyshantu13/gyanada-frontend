import { studentData } from "../assets/TableData";
import StripedTable from "../components/Table";

const Dashboard = () => {
  const totalStudents = 100; 
  const totalAgents = 50; 
  const birthdaysToday = 5; 
  return (
    <div className="base--container">
    <h2 className="dashboard-title">Dashboard</h2>
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
  </div>
  );
};

export default Dashboard;
