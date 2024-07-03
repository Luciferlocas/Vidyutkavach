import React from "react";
import DashIcon from "../Assets/NavIcons/DashIcon";
import GridMonitorIcon from "../Assets/NavIcons/GridMonitorIcon";
import ComponentMonitorIcon from "../Assets/NavIcons/ComponentMonitorIcon";
import PatchIcon from "../Assets/NavIcons/PatchIcon";
import AdminIcon from "./NavIcons/AdminIcon";

const url = "https://api.anaskhan.site/api";

const NavItems = [
  {
    title: "Admin Panel",
    icon: <AdminIcon />,
    navigate: "/adminpanel",
  },
  {
    title: "Dashboard",
    icon: <DashIcon />,
    navigate: "/dashboard",
  },
  {
    title: "Grid Monitoring",
    icon: <GridMonitorIcon />,
    navigate: "/gridmonitoring",
  },
  {
    title: "Component Monitoring",
    icon: <ComponentMonitorIcon />,
    navigate: "/componentmonitoring",
  },
  {
    title: "Patch Management",
    icon: <PatchIcon />,
    navigate: "/patchmanagement",
  },
];

export { NavItems, url };
