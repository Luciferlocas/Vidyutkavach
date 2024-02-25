import React, { useEffect, useContext } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import NavbarTop from "./Components/Navmenu/NavbarTop";
import NavbarLeft from "./Components/Navmenu/NavbarLeft";
// import Cookies from "js-cookie";
import AuthContext from "./Context/Authentication/AuthContext";
import Dashboard from "./Pages/Dashboard/Dashboard";
import GridMonitoring from "./Pages/GridMonitoring/GridMonitoring";
import ComponentMonitoring from "./Pages/ComponentMonitoring/ComponentMonitoring";
import HardwareManagement from "./Pages/HardwareManagement/HardwareManagement";
import PatchManagement from "./Pages/PatchManagement/PatchManagement";
import SecurityCenter from "./Pages/SecurityCenter/SecurityCenter";

const App = () => {
  const { theme } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <main className={`${theme ? "dark" : ""} text-foreground bg-background`}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/gridmonitoring" element={<GridMonitoring />} />
            <Route
              path="/componentmonitoring"
              element={<ComponentMonitoring />}
            />
            <Route
              path="/hardwaremanagement"
              element={<HardwareManagement />}
            />
            <Route path="/patchmanagement" element={<PatchManagement />} />
            <Route path="/securitycenter" element={<SecurityCenter />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

const MainLayout = ({ children }) => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return token ? (
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
