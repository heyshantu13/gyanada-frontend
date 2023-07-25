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
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/my-forms",
        element: <MyForms />,
      },
      {
        path: "/my-agents",
        element: <MyAgents />,
      },
      {
        path: "/add-form",
        element: <AddForm />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
