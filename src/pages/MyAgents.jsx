import { Link } from "react-router-dom";
import StripedTable from "../components/Table";
import { agentsData } from "../assets/TableData";
import { useState } from "react";
import AddAgent from "../components/AddAgent";

const MyAgents = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <div className="base--container relative">
      <div className="wrapper">
        <div>
          <h4>Agent Manager</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin/agents">Dashboard/ Agents</Link>
              </li>
            </ol>
          </nav>
        </div>
        <button onClick={() => setIsModalActive(true)} className="btn btn-dark">
          Add Agent
        </button>
      </div>
      <div className="base--container">
        <StripedTable
          columns={[
            { Header: "Sr. No", accessor: "id" },
            { Header: "Name", accessor: "name" },
            { Header: "Email", accessor: "email" },
            { Header: "Phone", accessor: "phone" },
            { Header: "Address", accessor: "address" },
          ]}
          data={agentsData}
        />
      </div>
      {isModalActive && <AddAgent setIsModalActive={setIsModalActive} />}
    </div>
  );
};

export default MyAgents;
