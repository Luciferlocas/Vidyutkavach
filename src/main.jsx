import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./Context/Authentication/AuthContext";
import { PatchProvider } from "./Context/PatchManagement/PatchContext";
import { DashboardProvider } from "./Context/Dashboard/DashboardContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <NextUIProvider>
      <AuthProvider>
        <DashboardProvider>
          <PatchProvider>
            <App />
          </PatchProvider>
        </DashboardProvider>
      </AuthProvider>
    </NextUIProvider>
  </>
);
