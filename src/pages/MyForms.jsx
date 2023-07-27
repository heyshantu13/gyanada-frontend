import { Link } from "react-router-dom";
import Viewer from "../components/Viewer";

const MyForms = () => {
  return (
    <div className="base--container">
      <header className="wrapper">
        <h2>My Forms</h2>
        <Link to="/add-form" className="btn btn-dark">
          Add Form
        </Link>
      </header>
      <div>
        <Viewer />
      </div>
    </div>
  );
};

export default MyForms;
