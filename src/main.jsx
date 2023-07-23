import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./feature/store.js";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <App />
          <Toaster />
        </Layout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
