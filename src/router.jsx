import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddForm from "./components/AddForm";
import Dashboard from "./pages/Dashboard";
import MyForms from "./pages/MyForms";
import MyAgents from "./pages/MyAgents";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App />,
    children: [
      // Define other admin-related routes here
      {
        path: "dashboard", // Define the "/dashboard" route here independently
        element: <Dashboard />,
      },
      {
        path: "forms",
        element: <MyForms />,
      },
      {
        path: "agents",
        element: <MyAgents />,
      },
      {
        path: "create/form",
        element: <AddForm />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/", // Move the "/" route outside the "/admin" route
    element: <Login />,
  },
]);
