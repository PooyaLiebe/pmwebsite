import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { Tooltip } from '@mui/material'
import { Navbar, Sidebar, ThemeSettings } from './components'
import { Pie } from "./components"
import {
  Dashboard,
  Forms,
  OperatorSubmit,
  Kanban,
  Line,
  Area,
  Login,
  Bar,
  Start,
  TechnicianLogin,
  OperatorLogin,
  SubmitForm,
  Projects,
} from "./pages";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import TechnicianSubmit from "./pages/TechnicianSubmit";

function App() {


  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
