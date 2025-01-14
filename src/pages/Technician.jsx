/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { Modal } from "@mui/material";

function Technician() {
  const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded shadow-lg">{children}</div>
      </div>
    );
  };
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const handleCloseModal1 = () => {
    setIsModal1Open(false);
  };

  const handleSendTech = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/techniciansubmit",
        tech
      ); // Update '/api/Tech' with your actual endpoint
      console.log("Response from server:", response.data);
      // Optionally, update your UI to reflect successful submission
      setIsModal1Open(false); // Close the modal after successful submission
    } catch (error) {
      console.error("Error sending data:", error);
      // Handle the error appropriately, e.g., display an error message to the user
      alert("خطا در ارسال اطلاعات");
    }
  };
  return (
    <Modal isOpen={isModal1Open} onClose={() => setIsModal1Open(false)}>
      <div className="container">
        <header className="flex">Aghlam</header>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="kalaname" className="mr-2">
              نام کالا
            </label>
            <input
              type="text"
              name="kalaname"
              id="kalaname"
              placeholder="نام کالا"
              className="outline-none text-14 font-normal rounded-md shadow-lg border-2 p-4 h-11 m-2"
              onChange={(e) =>
                setTech({
                  ...tech,
                  kalaname: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="countkala">تعداد</label>
            <input
              type="text"
              name="countkala"
              id="countkala"
              placeholder="تعداد"
              className="outline-none text-14 font-normal rounded-md shadow-lg border-2 p-4 h-11 m-2"
              onChange={(e) =>
                setTech({
                  ...tech,
                  countkala: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="vahedkala">واحد</label>
            <select
              type="text"
              name="vahedkala"
              id="vahedkala"
              placeholder=""
              className="outline-none text-14 font-normal rounded-md shadow-lg border-2 p-2 h-11 m-2"
              onChange={(e) =>
                setTech({
                  ...tech,
                  vahedkala: e.target.value,
                })
              }
            >
              <option value="عدد">عدد</option>
              <option value="گرم">گرم</option>
              <option value="کیلوگرم">کیلوگرم</option>
              <option value="متر">متر</option>
              <option value="سانتی متر">سانتی متر</option>
              <option value="میلی متر">میلی متر</option>
              <option value="لیتر">لیتر</option>
              <option value="گالن">گالن</option>
            </select>
          </div>
          <div>
            <label htmlFor="codekala">کد کالا</label>
            <input
              type="text"
              name="codekala"
              id="codekala"
              placeholder=""
              className="outline-none text-14 font-normal rounded-md shadow-lg border-2 p-4 h-11 m-2"
              onChange={(e) =>
                setTech({
                  ...tech,
                  codekala: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="flamekala">قطعه مستعمل</label>
            <select
              type="text"
              name="flamekala"
              id="flamekala"
              placeholder=""
              className="outline-none text-14 font-normal rounded-md shadow-lg border-2 p-2 h-11 m-2"
              onChange={(e) =>
                setTech({
                  ...tech,
                  flamekala: e.target.value,
                })
              }
            >
              <option value="خیر">خیر</option>
              <option value="بله">بله</option>
            </select>
          </div>
          <div>
            <label htmlFor="shopkala">خرید فوری</label>
            <select
              type="text"
              name="shopkala"
              id="shopkala"
              placeholder=""
              className="outline-none text-14 font-normal rounded-md shadow-lg border-2 p-2 h-11 m-2"
              onChange={(e) =>
                setTech({
                  ...tech,
                  shopkala: e.target.value,
                })
              }
            >
              <option value="فوری">فوری</option>
              <option value="ضروری">ضروری</option>
              <option value="معمولی">معمولی</option>
            </select>
          </div>
          <button onClick={handleSendTech}>تایید</button>
          <button onClick={handleCloseModal1}>خروج</button>
        </div>
      </div>
    </Modal>
  );
}
export default Technician;
