import { Link } from "react-router-dom";
import { studentData } from "../assets/TableData";
import StripedTable from "../components/Table";
import { useEffect, useState } from "react";
import Modal from "react-modal"; 
import { userRequest } from "../http/axiosInterceptors";

const Dashboard = () => {
  const totalStudents = 100; 
  const totalAgents = 50; 
  const birthdaysToday = 5; 
  const [showTable, setShowTable] = useState(false);
  const [dashboard, setDashboard] = useState(null)

  useEffect(() => {
    const getDashboard = async () => {
      try {
        const response = await userRequest.get("/dashboard");
        const { data } = response;
        setDashboard(data.data);
      } catch (error) {
        console.log("Error fetching dashboard data:", error);
      }
    };

    getDashboard();
  }, []);

  return (
    <>
      {/* Main Page Started */}
      <div className="base--container relative">
        {/* Breadcrumb */}
        <div className="wrapper">
        <div>
          <h4>Dashboard</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin/dashboard">Dashboard</Link>
              </li>
            </ol>
          </nav>
        </div>
        {/* <button onClick={() => setIsModalActive(true)} className="btn btn-dark">
          Add Agent
        </button> */}
        </div>
         {/* Breadcrumb */}
        <div className="row">
          <div className="col bg-light p-4 rounded mt-4">
            {/* Min Content Start*/}
            <div className="dashboard-data-container">
              <div className="card--container">
                <i className="fas fa-user-graduate icon"></i>
                <h5>Total Students</h5>
                <p className="card-count">{dashboard?.totalStudents || 0}</p>
              </div>
              <div className="card--container">
                <i className="fas fa-user-tie icon"></i>
                <h5>Total Agents</h5>
                <p className="card-count">{dashboard?.totalAgents || 0}</p>
              </div>
              <div
                className="card--container birthdays-today-container"
                onMouseEnter={() => setShowTable(true)}
                onMouseLeave={() => setShowTable(false)}
              >
                <i className="fas fa-birthday-cake icon"></i>
                <h5>Something Cool for Today</h5>
                <p className="card-count">{dashboard?.totalEvents || 0}</p>
              </div>
            </div>
            <div className="table--container">
              <p className="recently-joined-title">Recent Students Data</p>
              <div className="recently-joined-table">
                <StripedTable
                  columns={[
                    { Header: 'Sr. No', accessor: 'id' },
                    { Header: 'Name', accessor: 'name' },
                    { Header: 'Email', accessor: 'email' },
                    { Header: 'Phone', accessor: 'phone' },
                  ]}
                  data={dashboard?.recentlyJoined || []}
                />
              </div>
            </div>
            {/* Main Content End */}
          </div>
        </div>
      </div>
      {/* Main Page End */}
      {/* Modal for displaying table */}
      <Modal
        isOpen={showTable}
        onRequestClose={() => setShowTable(false)}
        contentLabel="Table Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="birthday-table">
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
      </Modal>
    </>
  );
};

export default Dashboard;
