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
  Link,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import Dark from "../../Assets/Icons/Dark";
import Light from "../../Assets/Icons/Light";
import Logo from "../../Assets/Icons/Logo";
import { NavItems } from "../../Assets/Utils";

const NavbarTop = () => {
  const { toggle, theme } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
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
        <NavbarBrand>
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
          <NavLink to="/">
            <Button variant="flat" color="danger" className="font-bold">
              Log Out
            </Button>
          </NavLink>
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
        <Button variant="flat" color="danger" className=" max-w-64">
          Log Out
        </Button>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarTop;
