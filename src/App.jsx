import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import Footer from "./components/Footer";

const App = () => {
  const [isActive, setIsActive] = useState(true);

  const handleMenu = () => {
    setIsActive((prev) => !prev);
    // console.log(isActive);
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
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
