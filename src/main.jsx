import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

import Modal from "react-modal";

Modal.setAppElement("#root"); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
      <Toaster />
        <RouterProvider router={router} />
      </PersistGate>
    </React.StrictMode>
  </Provider>,
    document.getElementById("root")

);
