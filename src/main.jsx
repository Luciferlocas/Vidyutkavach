import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./Context/Authentication/AuthContext";
import { DashboardProvider } from "./Context/Dashboard/DashboardContext";
import { AdminProvider } from "./Context/Admin/AdminContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <NextUIProvider>
      <AuthProvider>
        <AdminProvider>
          <DashboardProvider>
            <App />
          </DashboardProvider>
        </AdminProvider>
      </AuthProvider>
    </NextUIProvider>
  </>
);
