/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./submitstyle.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        {children}
      </div>
    </div>
  );
};

function TechnicianSubmit() {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [show, setShow] = useState(false);
  const [showPermit, setShowPermit] = useState(false);
  const handleSelectChange = (event) => {
    if (event.target.value === "بله") {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const handleSelectChangePermit = (event) => {
    if (event.target.value === "بله") {
      setShowPermit(true);
    } else {
      setShowPermit(false);
    }
  };
  const [values, setValues] = useState({
    instructionsconfirm: "",
  });
  const navigate = useNavigate();
  const handleSend = () => {
    // handleSubmit();
    handleClose();
  };
  const handleSendPermit = () => {
    // handleSubmit();
    handleClosePermit();
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleClosePermit = () => {
    setShowPermit(false);
  };
  const handleSendAghlam = () => {
    handleCloseModal1()
  }
  const handleCloseModal1 = () => {
    setIsModal1Open(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/techniciansubmit", values)
      .then((result) => {
        if (result.data.Status) {
          navigate("/techniciansubmit");
          alert("فرم با موفقیت ثبت شد");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="body dark:bg-secondary-dark-bg rounded-3xl">
      <div className="container">
        <header>ثبت فرم</header>
        <form onSubmit={handleSubmit}>
          <div className="form first">
            <div className="details personal">
              <div className="fields">
                <div className="input-field">
                  <label htmlFor="instructions">
                    آیا برای انجام تعمیر دستورالعمل تهیه شده است ؟
                  </label>
                  <select
                    name="instructions"
                    id="instructions"
                    className="text-center"
                    onChange={handleSelectChange}
                  >
                    <option value="خیر">خیر</option>
                    <option value="بله">بله</option>
                  </select>
                  {show && (
                    <>
                      <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
                      <div className="fixed inset-0 flex items-center justify-center z-20">
                        <div className="bg-white p-4 rounded">
                          <input
                            type="text"
                            name="instructionsconfirm"
                            id="instructionsconfirm"
                            placeholder="شماره دستورالعمل را وارد کنید"
                            onChange={(e) => {
                              setValues({
                                ...values,
                                instructionsconfirm: e.target.value,
                              });
                            }}
                          />
                          <div className="flex justify-end">
                            <button
                              className="bg-blue-500 text-white px-4 py-2 rounded"
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
                <div className="input-field">
                  <label htmlFor="failurepart">
                    نام قسمت معیوب(بر اساس تکسونومی)
                  </label>
                  <input
                    type="text"
                    name="failurepart"
                    id="failurepart"
                    placeholder="نام قسمت معیوب(بر اساس تکسونومی)"
                    onChange={(e) =>
                      setValues({ ...values, failurepart: e.target.value })
                    }
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="permit">نیاز به مجوز ایمنی دارد ؟</label>
                  <select
                    name="permit"
                    id="permit"
                    className="text-center"
                    onChange={handleSelectChangePermit}
                  >
                    <option value="خیر">خیر</option>
                    <option value="بله">بله</option>
                  </select>
                  {showPermit && (
                    <>
                      <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
                      <div className="fixed inset-0 flex items-center justify-center z-20">
                        <div className="bg-white p-4 rounded mt-3">
                          <input
                            type="text"
                            name="permitconfirmnumber"
                            id="permitconfirmnumber"
                            placeholder="شماره پرمیت را وارد کنید"
                            onChange={(e) => {
                              setValues({
                                ...values,
                                permitconfirmnumber: e.target.value,
                              });
                            }}
                          />
                          <div className="flex justify-end">
                            <button
                              className="bg-blue-500 text-white px-4 py-2 rounded"
                              onClick={handleSendPermit}
                            >
                              تایید
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="input-field">
                  <label htmlFor="failuretime">مدت زمان تشخیص عیب</label>
                  <input
                    type="time"
                    name="failuretime"
                    id="failuretime"
                    onChange={(e) => {
                      setValues({ ...values, failuretime: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="sparetime">مدت زمان تهیه لوازم یدکی</label>
                  <input
                    type="time"
                    name="sparetime"
                    id="sparetime"
                    onChange={(e) => {
                      setValues({ ...values, sparetime: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="startfailuretime">
                    میزان ساعت کار تجهیز در زمان شروع به رفع عیب
                  </label>
                  <input
                    type="time"
                    name="startfailuretime"
                    id="startfailuretime"
                    onChange={(e) => {
                      setValues({
                        ...values,
                        startfailuretime: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="problemdescription">
                    کلیات شرح عیب مشاهده شده
                  </label>
                  <textarea
                    name="problemdescription"
                    id="problemdescription"
                    placeholder="کلیات شرح عیب مشاهده شده را توضیح دهید : "
                    onChange={(e) =>
                      setValues({
                        ...values,
                        problemdescription: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="nextBtn"
                  onClick={() => setIsModal1Open(true)}
                >
                  اقلام
                </button>
                <button
                  type="submit"
                  className="nextBtn"
                  onClick={() => setIsModal2Open(true)}
                >
                  تکنیسین
                </button>
                <button
                  type="submit"
                  className="nextBtn"
                >
                  ثبت
                </button>
                <Modal
                  isOpen={isModal1Open}
                  onClose={() => setIsModal1Open(false)}
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div className="input-field">
                      <h1>Aghlam</h1>
                      <label htmlFor="kalaname1">نام کالا</label>
                      <input
                        type="text"
                        name="kalaname1"
                        id="kalaname1"
                        placeholder="نام کالا"
                      />
                    </div>
                    <div className="input-field">

                      <label htmlFor="kalaname2">نام کالا</label>
                      <input
                        type="text"
                        name="kalaname2"
                        id="kalaname2"
                        placeholder="نام کالا"
                      />
                    </div>
                    <div className="input-field">

                      <label htmlFor="kalaname3">نام کالا</label>
                      <input
                        type="text"
                        name="kalaname3"
                        id="kalaname3"
                        placeholder="نام کالا"
                      />
                    </div>
                    <div className="input-field">

                      <label htmlFor="kalaname4">نام کالا</label>
                      <input
                        type="text"
                        name="kalaname4"
                        id="kalaname4"
                        placeholder="نام کالا"
                      />
                    </div>
                    <div className="input-field">

                      <label htmlFor="kalaname5">نام کالا</label>
                      <input
                        type="text"
                        name="kalaname5"
                        id="kalaname5"
                        placeholder="نام کالا"
                      />
                    </div>
                    <div className="input-field">

                      <label htmlFor="kalaname6">نام کالا</label>
                      <input
                        type="text"
                        name="kalaname6"
                        id="kalaname6"
                        placeholder="نام کالا"
                      />
                    </div>
                    <button onClick={handleSendAghlam}>تایید</button>
                  </div>
                </Modal>
                <Modal
                  isOpen={isModal2Open}
                  onClose={() => setIsModal1Open(false)}
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div className="input-field">
                      <h2>Technician</h2>
                      <input
                        type="text"
                        name="kalaname1"
                        id="kalaname1"
                        placeholder="پرسنل انجام دهنده"
                      />
                    </div>
                    <div className="input-field">

                      <label htmlFor="kalaname2">نام کالا</label>
                      <input
                        type="text"
                        name="kalaname2"
                        id="kalaname2"
                        placeholder="نام کالا"
                      />
                    </div>
                    <div className="input-field">

                      <label htmlFor="kalaname3">نام کالا</label>
                      <input
                        type="text"
                        name="kalaname3"
                        id="kalaname3"
                        placeholder="نام کالا"
                      />
                    </div>
                    <div className="input-field">

                      <label htmlFor="kalaname4">نام کالا</label>
                      <input
                        type="text"
                        name="kalaname4"
                        id="kalaname4"
                        placeholder="نام کالا"
                      />
                    </div>
                    <div className="input-field">

                      <label htmlFor="kalaname5">نام کالا</label>
                      <input
                        type="text"
                        name="kalaname5"
                        id="kalaname5"
                        placeholder="نام کالا"
                      />
                    </div>
                    <div className="input-field">

                      <label htmlFor="kalaname6">نام کالا</label>
                      <input
                        type="text"
                        name="kalaname6"
                        id="kalaname6"
                        placeholder="نام کالا"
                      />
                    </div>
                    <button>تایید</button>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TechnicianSubmit;
