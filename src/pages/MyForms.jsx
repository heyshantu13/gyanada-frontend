import { Link } from "react-router-dom";
import Viewer from "../components/Viewer";

const MyForms = () => {
  return (
    <div className="base--container">
      <header className="wrapper d-flex justify-content-between align-items-center">
        <div>
          <h4>Form Manager</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin/agents">Dashboard/ forms</Link>
              </li>
            </ol>
          </nav>
        </div>
        <div>
          <Link to="/admin/create/form" className="btn btn-dark mr-2">
            <i className="fas fa-pencil-alt mr-2"></i> Update Form
          </Link>
        </div>
      </header>
      <div className="row">
        <div className="col bg-light p-4 rounded mt-4">
          <div className="row mt-4">
            <div className="col-md-12">
              <h3
                style={{
                  marginBottom: "20px",
                  fontWeight: "bold",
                  color: "#333",
                }}
                className="d-flex justify-content-center"
              >
                Student Data Form
              </h3>
              <div className="text-center">
                <small>
                  This is just a view for form to check how form will show to
                  agent
                </small>
              </div>
            </div>
            <div className="col-md-12">
              {/* Add spacing on the sides using a wrapper div */}
              <div style={{ padding: "10px" }}>
                <Viewer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyForms;
