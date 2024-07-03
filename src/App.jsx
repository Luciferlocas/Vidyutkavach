import React, { useContext } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Verify from "./Pages/Login/Verify";
import NavbarTop from "./Components/Navmenu/NavbarTop";
import NavbarLeft from "./Components/Navmenu/NavbarLeft";
import Cookies from "js-cookie";
import AuthContext from "./Context/Authentication/AuthContext";
import Dashboard from "./Pages/Dashboard/Dashboard";
import GridMonitoring from "./Pages/GridMonitoring/GridMonitoring";
import ComponentMonitoring from "./Pages/ComponentMonitoring/ComponentMonitoring";
import HardwareManagement from "./Pages/HardwareManagement/HardwareManagement";
import PatchManagement from "./Pages/PatchManagement/PatchManagement";
import SecurityCenter from "./Pages/SecurityCenter/SecurityCenter";
import NGiNX from "./Pages/SecurityCenter/NGiNX";
import SecurityAlerts from "./Pages/SecurityCenter/SecurityAlerts";
import HoneypotAlerts from "./Pages/SecurityCenter/HoneypotAlerts";
import Generation from "./Pages/ComponentMonitoring/Generation";
import Adminpanel from "./Pages/Admin/Adminpanel";

const App = () => {
  const { theme } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <main className={`${theme ? "dark" : ""} text-foreground bg-background min-h-screen`}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/verify" element={<Verify />} />
          <Route element={<MainLayout />}>
            <Route path="/adminpanel" element={<Adminpanel />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/gridmonitoring" element={<GridMonitoring />} />
            <Route
              path="/componentmonitoring"
              element={<ComponentMonitoring />}
            />
            <Route
              path="/componentmonitoring/generationdetail"
              element={<Generation />}
            />
            <Route
              path="/hardwaremanagement"
              element={<HardwareManagement />}
            />
            <Route path="/patchmanagement" element={<PatchManagement />} />
            <Route path="/securitycenter" element={<SecurityCenter />} />
            <Route path="/securitycenter/nginx" element={<NGiNX />} />
            <Route
              path="/securitycenter/securityalerts"
              element={<SecurityAlerts />}
            />
            <Route
              path="/securitycenter/honeypotalerts"
              element={<HoneypotAlerts />}
            />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

const MainLayout = ({ children }) => {
  const token = Cookies.get("token");

  return !token ? (
    <>
      <NavbarTop />
      <div className="flex">
        <NavbarLeft />
        <div className="w-full">
          {children}
          <Outlet />
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/" replace />
  );
};

export default App;
