/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { useStateContext } from "../contexts/ContextProvider";
import { useRoleBasedLinks } from "../data/dummy";
import { SiShopware } from "react-icons/si";

const Sidebar = ({ role }) => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const allLinks = useRoleBasedLinks();
  const filteredLinks = allLinks.filter(
    (item) => item.title.toLowerCase() === role
  );

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  // const Sidebarlinks {
  // // const operatorLinks = [
  // //   { name: "dashboard", icon: <FiShoppingBag /> },
  // //   { name: "OperatorSubmit", icon: <RiContactsLine /> },
  // //   { name: "Forms", icon: <FaWpforms /> },
  // // ];

  // // const technicianLinks = [
  // //   { name: "dashboard", icon: <FiShoppingBag /> },
  // //   { name: "TechnicianSubmit", icon: <RiContactsLine /> },
  // //   { name: "Forms", icon: <FaWpforms /> },
  // // ];

  // // const adminLinks = [
  // //   { name: "dashboard", icon: <FiShoppingBag /> },
  // //   { name: "submitform", icon: <RiContactsLine /> },
  // //   { name: "TechnicianSubmit", icon: <RiContactsLine /> },
  // //   { name: "forms", icon: <FaWpforms /> },
  // //   { name: "HSE", icon: <FaWpforms /> },
  // //   { name: "projects", icon: <FiPieChart /> },
  // //   { name: "kanban", icon: <BsKanban /> },
  // // ];
  // // const hseLinks = [
  // //   { name: "HSEform", icon: <RiContactsLine /> },
  // //   { name: "HSE Form", icon: <FaWpforms /> },
  // // ];
  // // const links =
  // //   role === "operator"
  // //     ? operatorLinks
  // //     : role === "technician"
  // //     ? technicianLinks
  // //     : role === "hse"
  // //     ? hseLinks
  // //     : adminLinks;
  // }

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
            {filteredLinks && filteredLinks.length > 0 ? (
              filteredLinks.map((item) => (
                <div key={item.title}>
                  <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => (
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
                      <span className="capitalize ">
                        {link.displayName || link.name}
                      </span>
                    </NavLink>
                  ))}
                </div>
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
