import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./start.css";

function Start() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:5173/auth/adminlogin")
      .then((result) => {
        if (result.data.Status) {
          if (result.data.role === "technician") {
            navigate("/dashboard");
          }
          if (result.data.role === "operator") {
            navigate("/dashboard");
          } else {
            navigate("/dashboard");
          }
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);
  return (
    <div className="start-container">
      <div className="start-wrapper">
        <form>
          <h1>Welcome</h1>
          <div className="flex items-center ">
            <button
              type="button"
              onClick={() => {
                navigate("/login");
              }}
              className="w-full h-[50px] bg-[#fff] border-[none] 
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
