import React, { useContext, useState } from "react";
import AuthContext from "../../Context/Authentication/AuthContext";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { NavLink, useNavigate } from "react-router-dom";
import Dark from "../../Assets/Icons/Dark";
import Light from "../../Assets/Icons/Light";
import toast from "react-hot-toast";
import Logo from "../../Assets/Icons/Logo";
import { NavItems } from "../../Assets/Utils";

const NavbarTop = () => {
  const { toggle, theme, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } finally {
      toast.success("Logged out successfully");
    }
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        wrapper: "max-w-[1440px] px-2 dark:text-white text-black",
      }}
      isBordered
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand className="hidden sm:flex">
          <Logo w={220} h={40} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <button className="mt-2 cursor-pointer" onClick={toggle}>
            {!theme ? <Dark /> : <Light />}
          </button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button variant="flat" color="danger" className="font-bold" onClick={handleLogout}>
            Log Out
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="dark:bg-white bg-black flex flex-col gap-4">
        {NavItems.map((item, i) => (
          <NavbarMenuItem key={i}>
            <NavLink
              to={item.navigate}
              className={({ isActive }) =>
                isActive
                  ? " max-w-64 text-black text-base font-bold rounded-lg bg-white flex items-center p-3"
                  : "text-white flex items-center p-3 text-base"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon}
              <span className="ms-3">{item.title}</span>
            </NavLink>
          </NavbarMenuItem>
        ))}
        <Button
          variant="flat"
          color="danger"
          className="max-w-64"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarTop;
