import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { LuMenu } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";

const withLayout = (WrappedComponent) => {
  const WithLayout = (props) => {
    const [isActive, setIsActive] = useState(true);
    const data = useSelector((state) => state.user.token);
    console.log(data)
    const navigate = useNavigate();

    useEffect(() => {
      if (!data) {
        navigate("/");
      }
    }, [data, navigate]);

    const handleMenu = () => {
      setIsActive((prev) => !prev);
    };

    return (
      <>
        <div className="app">
          <aside className={`sidebar--container ${isActive ? "" : "hidden"}`}>
            <Sidebar />
          </aside>
          <button
            onClick={handleMenu}
            className={`menu--btn  ${!isActive ? "menu-reposition" : null}`}
          >
            {!isActive ? <LuMenu /> : <IoCloseSharp />}
          </button>
          <main className="main">
            <Header />
            <WrappedComponent {...props} />
          </main>
        </div>
      </>
    );
  };

  return WithLayout;
};

export default withLayout;
