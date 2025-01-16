/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./submitstyle.css";
function Forms({ role }) {
  const [rows, setRows] = useState([
    {
      id: 1,
      problemdate: "1403/10/11",
      productionstop: "خیر",
      section: "Sanding",
      machinename: "Push Feeder",
      machinecode: "--/--/--/--",
      machineplacecode: "--/--/--/--/--/--/",
      stoptime: "1403/10/26 10:55 AM",
      failuretime: "1403/10/26 11:15",
      shift: "A",
      suggesttime: "فوری",
      worksuggest: "اضطراری",
      fixrepair: "درخواست اپراتو",
      reportinseption: "بازرسی فنی",
      faultdm: "اختلال در کارکرد",
      operatorname: "پویا پایور",
      problemdescription: "پوشر مشکل دارد",
      isEditing: false,
      isSelected: false,
    },
  ]);
  const [techrows, setTechRows] = useState([
    {
      id: 1,
      failurepart: "سندینگ",
      failuretime: "00:45",
      sparetime: "00:20",
      startfailuretime: "00:30",
      problemdescription: "پوشر از جای خود کنده شده بود",
      personel: "پویا پایور",
      personelnumber: "5260388496",
      datesubmit: "1403/10/28 06:06",
      specialjob: "کارشناس",
      starttimerepair: "1403/10/28 06:30",
      endtimerepair: "1403/10/28 07:30",
      repairstatus: "تعمیر کامل و قابل کاربری است",
      unitrepair: "Mechanic",
      shift: "A",
      delayreason: "نبود قطعه یدکی",
      failurereason: "اضافه بار",
      failurereasondescription:
        "پوشر به دلیل جوش نشدن اصولی از وسط شکسته شده بود",
      suggestionfailure: "در سری های بعد جوشکاری بصورت دقیق انجام شود",
      kalaname: "پیچ 2*2",
      countkala: "2",
      vahedkala: "عدد",
      codekala: "123654",
      flamekala: "خیر",
      shopkala: "فوری",
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
  const [showTech, setShowTech] = useState(false);
  const [instructions, setInstructions] = useState(false);
  const [piecetime, setPieceTime] = useState(false);
  const [permit, setPermit] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  function generateFormCode(section, problemDate, rowIndex) {
    const sectionCode = getSectionCode(section);
    const typeCode = getTypeCode(problemDate);
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

  function getTypeCode(problemDate) {
    const dateParts = problemDate.split("/");
    const month = dateParts[1]; // فرمت تاریخ همیشه اینجوری است "YYYY/MM/DD"
    return month.padStart(2, "0"); // ماه همیشه دو رقم است
  }

  const handleClose = () => setShow(false);
  const handleCloseTech = () => setShowTech(false);
  const handleClosePermit = () => setPermit(false);
  const handleCloseInstructions = () => setInstructions(false);

  const handleShow = (row) => {
    setCurrentRow(row);
    setShow(true);
  };
  const handleShowTech = (row) => {
    setCurrentRow(row);
    setShowTech(true);
  };
  const handleSend = () => {
    // Handle send logic here

    handleClose();
  };

  const handleDoubleClick = (id, field) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, isEditing: field } : row))
    );
  };

  const handleDoubleClickTech = (id, field) => {
    setTechRows(
      techrows.map((row) =>
        row.id === id ? { ...row, isEditing: field } : row
      )
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
  const handlePieceTime = (event) => {
    if (event.target.value === "بله") {
      setPieceTime(true);
    } else {
      setPieceTime(false);
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
    <div className="p-4 ">
      <div className="mb-10">
        <h1 className="bg-gray-200 w-full text-xl flex text-center justify-center align-center mb-6">
          فرم های ثبت شده توسط تولید
        </h1>
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
                <th className="py-2 px-4 border-b">انتخاب</th>
                <th className="py-2 px-4 border-b">ردیف</th>
                <th className="py-2 px-4 border-b">شماره درخواست</th>
                <th className="py-2 px-4 border-b">تاریخ بروز مشکل</th>
                <th className="py-2 px-4 border-b">
                  مشکل باعث توقف خط شده است ؟
                </th>
                <th className="py-2 px-4 border-b">بخش</th>
                <th className="py-2 px-4 border-b">نام دستگاه</th>
                <th className="py-2 px-4 border-b">کد دستگاه</th>
                <th className="py-2 px-4 border-b">کد محل استقرار دستگاه</th>
                <th className="py-2 px-4 border-b">ساعت شروع توقف</th>
                <th className="py-2 px-4 border-b">میزان ساعت کار تجهیز</th>
                <th className="py-2 px-4 border-b">شیفت</th>
                <th className="py-2 px-4 border-b">
                  زمان پیشنهادی برای شروع تعمیر
                </th>
                <th className="py-2 px-4 border-b">نوع کار درخواستی</th>
                <th className="py-2 px-4 border-b">تعمیر و تعویض اصلاحی</th>
                <th className="py-2 px-4 border-b">گزارش بازرسی</th>
                <th className="py-2 px-4 border-b">روش کشف عیب</th>
                <th className="py-2 px-4 border-b">نام اپراتور</th>
                <th className="py-2 px-4 border-b">کلیات شرح عیب مشاهده شده</th>
                {isActionColumnVisible && (
                  <th className="py-2 px-4 border-b">اقدامات</th>
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
                    {generateFormCode(row.section, row.problemdate, index)}
                  </td>
                  {[
                    "problemdate",
                    "productionstop",
                    "section",
                    "machinename",
                    "machinecode",
                    "machineplacecode",
                    "stoptime",
                    "failuretime",
                    "shift",
                    "suggesttime",
                    "worksuggest",
                    "fixrepair",
                    "reportinseption",
                    "faultdm",
                    "operatorname",
                    "problemdescription",
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
      <div>
        {/* <button
          className={`bg-red-500 text-white px-4 py-2 rounded mb-4 ${
            role === "operator" || role === "technician" ? "opacity-0" : ""
          }`}
          onClick={handleDelete}
          disabled={role === "operator" || role === "technician"}
        >
          حذف
        </button> */}
        <div className="overflow-x-auto mx-auto">
          <h1 className="bg-gray-200 w-full text-xl flex text-center justify-center align-center mb-6">
            فرم های ثبت شده توسط تکنیسین
          </h1>
          <table className="min-w-fit bg-white border border-gray-200 rounded-s-md z-0">
            <thead>
              <tr>
                <th className="px-4 border-b">ردیف</th>
                <th className="px-4 border-b">نام قسمت معیوب</th>
                <th className="px-4 border-b">مدت زمان تشخیص عیب</th>
                <th className="px-4 border-b">مدت زمان تهیه لوازم یدکی</th>
                <th className="px-4 border-b">میزات ساعت کار تجهیز</th>
                <th className="px-10 border-b">کلیات شرح عیب مشاهده شده</th>
                <th className="px-4 border-b">تکنیسین</th>
                <th className="px-4 border-b">کد پرسنلی</th>
                <th className="px-4 border-b">تاریخ انجام</th>
                <th className="px-4 border-b">مهارت</th>
                <th className="px-4 border-b">ساعت شروع تعمیرات</th>
                <th className="px-4 border-b">ساعت پایان تعمیرات</th>
                <th className="px-10 border-b">وضعیت تعمیر</th>
                <th className="px-4 border-b">واحد انجام دهنده</th>
                <th className="px-4 border-b">شیفت</th>
                <th className="px-12 border-b">دلیل تاخیر</th>
                <th className="px-8 border-b">دلیل خرابی</th>
                <th className="px-12 border-b">شرح دلیل خرابی</th>
                <th className="px-12 border-b">پیشنهاد</th>
                <th className="px-4 border-b">نام کالا</th>
                <th className="px-4 border-b">تعداد کالا</th>
                <th className="px-4 border-b">واحد کالا</th>
                <th className="px-4 border-b">کد کالا</th>
                <th className="px-4 border-b">قطعه متسعمل</th>
                <th className="px-4 border-b">خرید فوری</th>
                {isActionColumnVisible && (
                  <th className="py-2 px-4 border-b">اقدامات</th>
                )}
              </tr>
            </thead>
            <tbody>
              {techrows.map((row, index) => (
                <tr key={row.id}>
                  <td className="py-2 px-4 border-b">{row.id}</td>
                  {[
                    "failurepart",
                    "failuretime",
                    "sparetime",
                    "startfailuretime",
                    "problemdescription",
                    "personel",
                    "personelnumber",
                    "datesubmit",
                    "specialjob",
                    "starttimerepair",
                    "endtimerepair",
                    "repairstatus",
                    "unitrepair",
                    "shift",
                    "delayreason",
                    "failurereason",
                    "failurereasondescription",
                    "suggestionfailure",
                    "kalaname",
                    "countkala",
                    "vahedkala",
                    "codekala",
                    "flamekala",
                    "shopkala",
                  ].map((field) => (
                    <td
                      key={field}
                      className="py-2 px-4 border-b"
                      onDoubleClick={() => handleDoubleClickTech(row.id, field)}
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
                        onClick={() => handleShowTech(row)}
                      >
                        تایید
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showTech && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="fixed inset-0 flex items-center justify-center z-20">
              <div className="bg-white p-4 rounded text-center">
                <div className="text-center">
                  <label htmlFor="stoptimeproduction" className="text-center">
                    زمان پایان توقف را وارد کنید
                  </label>
                  <input
                    type="datetime-local"
                    name="stoptimeproduction"
                    id="stoptimeproduction"
                    className="outline-none text-center text-14 w-full font-normal flex items-center rounded-md shadow-lg border-2 p-2 h-11 m-2"
                  />
                </div>
                <div className="text-center">
                  <label htmlFor="starttimeproduction" className="text-center">
                    مدت زمان راه اندازی خط
                  </label>
                  <input
                    type="datetime-local"
                    name="starttimeproduction"
                    id="starttimeproduction"
                    className="outline-none text-center text-14 w-full font-normal flex items-center rounded-md shadow-lg border-2 p-2 h-11 m-2"
                  />
                </div>
                <div>
                  <label htmlFor="piecetimestop">
                    آیا توقف مقطعی وجود دارد ؟
                  </label>
                  <select
                    name="piecetimestop"
                    id="piecetimestop"
                    className="outline-none text-center text-14 w-full font-normal flex items-center rounded-md shadow-lg border-2 p-2 h-11 m-2"
                    onChange={handlePieceTime}
                  >
                    <option value="خیر">خیر</option>
                    <option value="بله">بله</option>
                  </select>
                  {piecetime && (
                    <>
                      <div>
                        <label htmlFor="piecetimecount">
                          مقدار زمان را به دقیقه وارد کنید
                        </label>
                        <input
                          type="number"
                          name="piecetimecount"
                          id="piecetimecount"
                          placeholder="مقدار زمان مقطعی را وارد کنید"
                          className="outline-none text-center text-14 w-full font-normal flex items-center rounded-md shadow-lg border-2 p-2 h-11 m-2"
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className="flex justify-center text-center items-center mt-5">
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                    onClick={handleCloseTech}
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
    </div>
  );
}

export default Forms;
