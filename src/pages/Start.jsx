/* eslint-disable no-unused-vars */
// noinspection ES6CheckImport

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./start.css";

function Start() {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("htt://localhost:3000/verify")
      .then((result) => {
        if (result.data.Status) {
          if (result.data.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("techniciansubmit");
          }
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="start-container">
      <div className="start-wrapper">
        <form>
          <h1>ورود کارکنان</h1>
          <div className="flex items-center ">
            <button
              type="button"
              onClick={() => {
                navigate("/login");
              }}
              className="w-full  h-[50px] bg-[#fff] border-[none] 
              outline-[none] rounded-[40px] [box-shadow:0_0_10px_rgba(0,_0,_0,_0.1)] 
              cursor-pointer text-[16px] text-[#333] font-bold mt-[45px] mx-[0] mb-[15px]"
            >
              PM
            </button>
            <button
              type="button"
              onClick={() => {
                navigate("/technicianlogin");
              }}
              className="w-full h-[50px]
               bg-[#fff] border-[none] outline-[none] 
               rounded-[40px] [box-shadow:0_0_10px_rgba(0,_0,_0,_0.1)] 
               cursor-pointer text-[16px] text-[#333] font-bold mt-[45px] mx-[0] mb-[15px]"
            >
              تکنیسین
            </button>
            <button
              type="button"
              onClick={() => {
                navigate("/operatorlogin");
              }}
              className="w-full h-[50px] bg-[#fff] border-[none] 
              outline-[none] rounded-[40px] [box-shadow:0_0_10px_rgba(0,_0,_0,_0.1)] 
              cursor-pointer text-[16px] text-[#333] font-bold mt-[45px] mx-[0] mb-[15px]"
            >
              اپراتور
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Start;
