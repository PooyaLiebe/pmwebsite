/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { useStateContext } from "../contexts/ContextProvider";

import { SiShopware } from "react-icons/si";
import { FiPieChart, FiShoppingBag } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa6";
import { BsKanban } from "react-icons/bs";

const Sidebar = ({ role }) => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  // Sidebar links based on roles
  const linksByRole = {
    operator: [
      { name: "dashboard", displayName: "داشبورد", icon: <FiShoppingBag /> },
      {
        name: "OperatorSubmit",
        displayName: "ثبت فرم اپراتور",
        icon: <RiContactsLine />,
      },
      { name: "Forms", displayName: "فرم ها", icon: <FaWpforms /> },
    ],
    technician: [
      { name: "dashboard", displayName: "داشبورد", icon: <FiShoppingBag /> },
      {
        name: "TechnicianSubmit",
        displayName: "ثبت فرم تکنیسین",
        icon: <RiContactsLine />,
      },
      { name: "Forms", displayName: "فرم ها", icon: <FaWpforms /> },
    ],
    admin: [
      { name: "dashboard", displayName: "داشبورد", icon: <FiShoppingBag /> },
      { name: "submitform", displayName: "ثبت فرم", icon: <RiContactsLine /> },
      {
        name: "TechnicianSubmit",
        displayName: "ثبت فرم تکنیسین",
        icon: <RiContactsLine />,
      },
      { name: "forms", displayName: "فرم ها", icon: <FaWpforms /> },
      {
        name: "projects",
        displayName: "پروژه های در حال انجام",
        icon: <FiPieChart />,
      },
      { name: "kanban", displayName: "نمای کلی پروژه ها", icon: <BsKanban /> },
    ],
  };

  // Retrieve the links based on the user's role
  const links = linksByRole[role] || linksByRole.admin; // Default to admin links if role is not found

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Planning Maintenance</span>
            </Link>
            <Tooltip content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </Tooltip>
          </div>
          <div className="mt-10 ">
            {Array.isArray(links) && links.length > 0 ? (
              links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : "",
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {link.icon}
                  <span className="capitalize ">{link.displayName}</span>
                </NavLink>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400 m-3 mt-4 ">
                No links available for your role.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
