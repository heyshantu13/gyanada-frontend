import { Link } from "react-router-dom";
import Viewer from "../components/Viewer";

const MyForms = () => {
  return (
    <div className="base--container">
      <header className="wrapper">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My Forms
            </li>
          </ol>
        </nav>
        <h2>My Forms</h2>
        <Link to="/admin/create/form" className="btn btn-dark">
          Edit Form
        </Link>
      </header>
      <div className="row">
        <div className="col bg-light p-4 rounded mt-4">
          <Viewer />
        </div>
      </div>
    </div>
  );
};

export default MyForms;
