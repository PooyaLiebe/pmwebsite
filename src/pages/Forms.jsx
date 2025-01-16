/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./submitstyle.css";
function Forms({ role }) {
  const [rows, setRows] = useState([
    {
      id: 1,
      section: "chipper",
      machineName: "Push Feeder",
      equipmentName: "Pusher",
      shift: "A",
      operatorName: "Pooya Payvar",
      formDate: "1403/10/16",
      problemType: "Mechanic",
      stopStatus: "Yes",
      stopDate: "1403/10/16",
      startDate: "1403/10/16",
      problemDescription: "بوش فیدر مشکل دارد",
      isEditing: false,
      isSelected: false,
    },
    {
      id: 2,
      section: "sanding",
      machineName: "Push Feeder",
      equipmentName: "Pusher",
      shift: "A",
      operatorName: "Pooya Payvar",
      formDate: "1403/01/16",
      problemType: "Mechanic",
      stopStatus: "Yes",
      stopDate: "1403/10/16",
      startDate: "1403/10/16",
      problemDescription: "بوش فیدر مشکل دارد",
      isEditing: false,
      isSelected: false,
    },
    {
      id: 3,
      section: "refiner",
      machineName: "Push Feeder",
      equipmentName: "Pusher",
      shift: "A",
      operatorName: "Pooya Payvar",
      formDate: "1403/05/16",
      problemType: "Mechanic",
      stopStatus: "Yes",
      stopDate: "1403/10/16",
      startDate: "1403/10/16",
      problemDescription: "بوش فیدر مشکل دارد",
      isEditing: false,
      isSelected: false,
    },
    {
      id: 4,
      section: "steam boiler",
      machineName: "Push Feeder",
      equipmentName: "Pusher",
      shift: "A",
      operatorName: "Pooya Payvar",
      formDate: "1403/08/16",
      problemType: "Mechanic",
      stopStatus: "Yes",
      stopDate: "1403/10/16",
      startDate: "1403/10/16",
      problemDescription: "بوش فیدر مشکل دارد",
      isEditing: false,
      isSelected: false,
    },
    {
      id: 5,
      section: "before press",
      machineName: "Push Feeder",
      equipmentName: "Pusher",
      shift: "A",
      operatorName: "Pooya Payvar",
      formDate: "1403/09/16",
      problemType: "Mechanic",
      stopStatus: "Yes",
      stopDate: "1403/10/16",
      startDate: "1403/10/16",
      problemDescription: "بوش فیدر مشکل دارد",
      isEditing: false,
      isSelected: false,
    },
  ]);
  const [values, setValues] = useState({
    instructions: "",
    instructionsconfirm: "",
    submitformtype: "",
  });
  const [show, setShow] = useState(false);
  const [instructions, setInstructions] = useState(false);
  const [permit, setPermit] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  function generateFormCode(section, formDate, rowIndex) {
    const sectionCode = getSectionCode(section);
    const typeCode = getTypeCode(formDate);
    const uniqueCode = (rowIndex + 1).toString().padStart(2, "0"); // Ensure the row index is always two digits
    return `02${sectionCode}${typeCode}${uniqueCode}`;
  }

  function getSectionCode(section) {
    switch (section.toLowerCase()) {
      case "chipper":
        return "01";
      case "conveyor line":
        return "02";
      case "dryer air graider":
        return "03";
      case "refiner":
        return "04";
      case "before press":
        return "06";
      case "press":
        return "07";
      case "after press":
        return "08";
      case "sanding":
        return "09";
      case "cooling system":
        return "10";
      case "steam boiler":
        return "11";
      case "general":
        return "15";
      default:
        return "00";
    }
  }

  function getTypeCode(formDate) {
    const dateParts = formDate.split("/");
    const month = dateParts[1]; // فرمت تاریخ همیشه اینجوری است "YYYY/MM/DD"
    return month.padStart(2, "0"); // ماه همیشه دو رقم است
  }

  const handleClose = () => setShow(false);
  const handleClosePermit = () => setPermit(false);
  const handleCloseInstructions = () => setInstructions(false);

  const handleShow = (row) => {
    setCurrentRow(row);
    setShow(true);
  };

  const handleSend = () => {
    // Handle send logic here
    console.log("Selected option:", selectedOption);
    handleClose();
  };

  const handleDoubleClick = (id, field) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, isEditing: field } : row))
    );
  };

  const handleSave = (id, field, value) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, [field]: value, isEditing: false } : row
      )
    );
  };

  const handleChange = (id, field, value) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleSelect = (id) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, isSelected: !row.isSelected } : row
      )
    );
  };
  const handleSelectChangeInstructions = (event) => {
    if (event.target.value === "بله") {
      setInstructions(true);
    } else {
      setInstructions(false);
    }
  };
  const handleSelectChangePermit = (event) => {
    if (event.target.value === "بله") {
      setPermit(true);
    } else {
      setPermit(false);
    }
  };
  const handleDelete = () => {
    setRows(rows.filter((row) => !row.isSelected));
  };

  const isActionColumnVisible = role !== "operator" && role !== "technician";

  return (
    <div className="p-4">
      <button
        className={`bg-red-500 text-white px-4 py-2 rounded mb-4 ${
          role === "operator" || role === "technician" ? "opacity-0" : ""
        }`}
        onClick={handleDelete}
        disabled={role === "operator" || role === "technician"}
      >
        حذف
      </button>
      <div className="overflow-x-auto mx-auto">
        <table className="min-w-fit bg-white border border-gray-200 rounded-s-md z-0">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Select</th>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Form Code</th>
              <th className="py-2 px-4 border-b">Section</th>
              <th className="py-2 px-4 border-b">Machine Name</th>
              <th className="py-2 px-4 border-b">Equipment Name</th>
              <th className="py-2 px-4 border-b">Shift</th>
              <th className="py-2 px-4 border-b">Operator Name</th>
              <th className="py-2 px-4 border-b">Form Date</th>
              <th className="py-2 px-4 border-b">Problem Type</th>
              <th className="py-2 px-4 border-b">Stop Status</th>
              <th className="py-2 px-4 border-b">Stop Date</th>
              <th className="py-2 px-4 border-b">Start Date</th>
              <th className="py-2 px-4 border-b">Problem Description</th>
              {isActionColumnVisible && (
                <th className="py-2 px-4 border-b">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id}>
                <td className="py-2 px-4 border-b">
                  <input
                    type="checkbox"
                    checked={row.isSelected}
                    onChange={() => handleSelect(row.id)}
                  />
                </td>
                <td className="py-2 px-4 border-b">{row.id}</td>
                <td className="py-2 px-4 border-b">
                  {generateFormCode(row.section, row.formDate, index)}
                </td>
                {[
                  "section",
                  "machineName",
                  "equipmentName",
                  "shift",
                  "operatorName",
                  "formDate",
                  "problemType",
                  "stopStatus",
                  "stopDate",
                  "startDate",
                  "problemDescription",
                ].map((field) => (
                  <td
                    key={field}
                    className="py-2 px-4 border-b"
                    onDoubleClick={() => handleDoubleClick(row.id, field)}
                  >
                    {row.isEditing === field ? (
                      <input
                        type="text"
                        value={row[field]}
                        onChange={(e) =>
                          handleChange(row.id, field, e.target.value)
                        }
                        onBlur={(e) =>
                          handleSave(row.id, field, e.target.value)
                        }
                        autoFocus
                      />
                    ) : (
                      row[field]
                    )}
                  </td>
                ))}
                {isActionColumnVisible && (
                  <td className="py-2 px-4 border-b">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                      onClick={() => handleShow(row)}
                    >
                      ارسال
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {show && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-white p-4 rounded text-center">
              <label htmlFor="" className="text-center">
                شخص دریافت کننده
              </label>
              <select className="outline-none text-center text-14 w-full font-normal flex items-center rounded-md shadow-lg border-2 p-2 h-11 m-2">
                <option value="mechanic">مهران الماسی فر</option>
                <option value="electric">مهدی زاده حسین</option>
                <option value="utility">محمد راشدی</option>
                <option value="metalworking">محسن اورامه</option>
                <option value="production">یونس حسین زاده</option>
              </select>
              <div className="text-center">
                <label htmlFor="instructions" className="text-center">
                  آیا برای انجام تعمیر دستورالعمل تهیه شده است ؟
                </label>
                <select
                  name="instructions"
                  id="instructions"
                  className="outline-none text-center text-14 w-full font-normal flex items-center rounded-md shadow-lg border-2 p-2 h-11 m-2"
                  onChange={handleSelectChangeInstructions}
                >
                  <option value="خیر">خیر</option>
                  <option value="بله">بله</option>
                </select>
                <label htmlFor="permit" className="text-center">
                  نیاز به مجوز ایمنی دارد ؟
                </label>
                <select
                  name="permit"
                  id="permit"
                  className="outline-none text-center text-14 w-full font-normal flex items-center rounded-md shadow-lg border-2 p-2 h-11 m-2"
                  onChange={handleSelectChangePermit}
                >
                  <option value="خیر">خیر</option>
                  <option value="بله">بله </option>
                </select>
                <label htmlFor="submitformtype">نوع فرم</label>
                <select
                  name="submitformtype"
                  id="submitformtype"
                  className="outline-none text-center text-14 w-full font-normal flex items-center rounded-md shadow-lg border-2 p-2 h-11 m-2"
                  onChange={(e) => {
                    setValues({
                      ...values,
                      submitformtype: e.target.value,
                    });
                  }}
                >
                  <option value="">EM</option>
                  <option value="">PM</option>
                  <option value="">CM</option>
                  <option value="">GM</option>
                </select>
                {permit && (
                  <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
                    <div className="fixed inset-0 flex items-center justify-center z-20">
                      <div className="bg-white p-4 rounded mt-3">
                        <input
                          type="text"
                          name="permitconfirmnumber"
                          id="permitconfirmnumber"
                          placeholder="شماره پرمیت را وارد کنید"
                          className="outline-none text-center text-14 w-full font-normal flex items-center rounded-md shadow-lg border-2 p-2 h-11 m-2"
                          onChange={(e) => {
                            setValues({
                              ...values,
                              permitconfirmnumber: e.target.value,
                            });
                          }}
                        />
                        <div className="flex justify-center text-center items-center mt-5">
                          <button
                            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                            onClick={handleClosePermit}
                          >
                            بستن
                          </button>
                          <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={handleClosePermit}
                          >
                            تایید
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {instructions && (
                  <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
                    <div className="fixed inset-0 flex items-center justify-center z-20">
                      <div className="bg-white p-4 rounded text-center">
                        <input
                          type="text"
                          name="instructionsconfirm"
                          id="instructionsconfirm"
                          placeholder="شماره دستورالعمل را وارد کنید"
                          className="outline-none text-center text-14 w-full font-normal flex justify-normal items-center rounded-md shadow-lg border-2 p-2  m-2"
                          onChange={(e) => {
                            setValues({
                              ...values,
                              instructionsconfirm: e.target.value,
                            });
                          }}
                        />
                        <div className="flex justify-center text-center items-center mt-5">
                          <button
                            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                            onClick={handleCloseInstructions}
                          >
                            بستن
                          </button>
                          <button
                            className="bg-blue-500 text-white px-4 py-2 rounded "
                            onClick={handleSend}
                          >
                            تایید
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="flex justify-center text-center items-center mt-5">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  onClick={handleClose}
                >
                  بستن
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleSend}
                >
                  ارسال
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Forms;
