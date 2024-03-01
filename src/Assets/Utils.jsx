import React from "react";
import DashIcon from "../Assets/NavIcons/DashIcon";
import GridMonitorIcon from "../Assets/NavIcons/GridMonitorIcon";
import ComponentMonitorIcon from "../Assets/NavIcons/ComponentMonitorIcon";
import HardwareIcon from "../Assets/NavIcons/HardwareIcon";
import PatchIcon from "../Assets/NavIcons/PatchIcon";
import SecurityIcon from "../Assets/NavIcons/SecurityIcon";

const url ="http://home.anaskhan.site:3453"

const NavItems = [
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
  // {
  //   title: "Hardware Management",
  //   icon: <HardwareIcon />,
  //   navigate: "/hardwaremanagement",
  // },
  {
    title: "Patch Management",
    icon: <PatchIcon />,
    navigate: "/patchmanagement",
  },
  {
    title: "Security Center",
    icon: <SecurityIcon />,
    navigate: "/securitycenter",
  },
];

export { NavItems, url };
