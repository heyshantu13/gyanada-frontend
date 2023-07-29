import "./app.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
// import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import PageLoader from "./components/PageLoader";

const App = () => {
  const [isActive, setIsActive] = useState(true);

  const data = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, [navigate]);

  const handleMenu = () => {
    setIsActive((prev) => !prev);
    // console.log(isActive);
  };

  return (
    <>
      <div className="app">
        <PageLoader/>
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
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
