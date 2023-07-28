import { studentData } from "../assets/TableData";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <div className="base--container">
      <h2>Dashboard</h2>
      <div className="dashboard-data-container">
        <div className="card--container">
          <h5>Total Students</h5>
        </div>
        <div className="card--container">
          <h5>Total Agents</h5>
        </div>
        <div className="card--container">
          <h5>Birthdays Today</h5>
        </div>
      </div>
      <div className="table--container">
        <p>Reccently joined students</p>
        <Table data={studentData} type="student" />
      </div>
    </div>
  );
};

export default Dashboard;
