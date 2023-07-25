import { Link } from "react-router-dom";

const MyForms = () => {
  return (
    <div className="base--container">
      <header className="wrapper">
        <h2>My Forms</h2>
        <Link to="/add-form" className="btn btn-dark">
          Add Form
        </Link>
      </header>
    </div>
  );
};

export default MyForms;
