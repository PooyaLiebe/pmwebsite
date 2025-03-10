/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import { LineChart, Navbar, Sidebar, ThemeSettings } from "./components";
import { Pie } from "./components";
import {
  Dashboard,
  Forms,
  OperatorSubmit,
  Kanban,
  Area,
  Login,
  Start,
  Bar,
  TechnicianLogin,
  OperatorLogin,
  SubmitForm,
  Projects,
  Aghlam,
  Technician,
} from "./pages";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import TechnicianSubmit from "./pages/TechnicianSubmit";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <AppContent
          activeMenu={activeMenu}
          currentColor={currentColor}
          themeSettings={themeSettings}
          setThemeSettings={setThemeSettings}
        />
      </BrowserRouter>
    </div>
  );
};

const AppContent = ({
  activeMenu,
  currentColor,
  themeSettings,
  setThemeSettings,
}) => {
  const location = useLocation();

  const hideComponents = [
    "/",
    "/login",
    "/technicianlogin",
    "/operatorlogin",
  ].includes(location.pathname);

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      {!hideComponents && (
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <Tooltip content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </Tooltip>
        </div>
      )}
      {activeMenu && !hideComponents ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
          <Sidebar />
        </div>
      ) : (
        !hideComponents && (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )
      )}
      <div
        className={
          activeMenu && !hideComponents
            ? "dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full "
            : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2 "
        }
      >
        {!hideComponents && (
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
        )}
        <div>
          {themeSettings && <ThemeSettings />}
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/technicianlogin" element={<TechnicianLogin />} />
            <Route path="/operatorlogin" element={<OperatorLogin />} />
            <Route path="/forms" element={<Forms />}></Route>
            <Route path="/operatorsubmit" element={<OperatorSubmit />}></Route>
            <Route
              path="/techniciansubmit"
              element={<TechnicianSubmit />}
            ></Route>
            <Route path="/kanban" element={<Kanban />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/aghlam" element={<Aghlam />}></Route>
            <Route path="/technician" element={<Technician />}></Route>
            <Route path="/area" element={<Area />}></Route>
            <Route path="/bar" element={<Bar />}></Route>
            <Route path="/pie" element={<Pie />}></Route>
            <Route path="/linechart" element={<LineChart />}></Route>
            <Route path="/submitform" element={<SubmitForm />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
