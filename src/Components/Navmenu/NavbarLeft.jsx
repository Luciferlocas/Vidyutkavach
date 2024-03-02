import React from "react";
import { ScrollShadow } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { NavItems } from "../../Assets/Utils";
import SecurityIcon from "../../Assets/NavIcons/SecurityIcon";

const NavbarLeft = () => {
  return (
    <aside
      id="default-sidebar"
      className="hidden lg:flex z-4 fixed px-2 py-5 w-60 h-screen border-r-1 border-r-zinc-200 dark:border-r-zinc-800"
      aria-label="Sidebar"
    >
      <ScrollShadow hideScrollBar className="flex flex-col w-full">
        <ul className="font-medium flex flex-col gap-6 text-sm">
          {NavItems.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.navigate}
                className={({ isActive }) =>
                  isActive
                    ? "dark:text-black text-white rounded-lg dark:bg-white bg-black flex items-center p-3"
                    : "rounded-lg dark:hover:bg-zinc-800 hover:bg-zinc-200 dark:text-white text-black flex items-center p-3"
                }
              >
                {item.icon}
                <span className="ms-3">{item.title}</span>
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="https://splunk.anaskhan.site"
              target="blank"
              className={({ isActive }) =>
                isActive
                  ? "dark:text-black text-white rounded-lg dark:bg-white bg-black flex items-center p-3"
                  : "rounded-lg dark:hover:bg-zinc-800 hover:bg-zinc-200 dark:text-white text-black flex items-center p-3"
              }
            >
              <SecurityIcon />
              <span className="ms-3">Security Center</span>
            </NavLink>
          </li>
        </ul>
      </ScrollShadow>
    </aside>
  );
};

export default NavbarLeft;
