/* eslint-disable no-unused-vars */
// noinspection ES6CheckImport

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./submitstyle.css";

function OperatorSubmit() {
  const [values, setValues] = useState({
    formcode: "",
    section: "",
    machinename: "",
    shift: "",
    operatorname: "",
    formdate: "",
    problemtype: "",
    stopstatus: "",
    stopdate: "",
    startdate: "",
    problemdescription: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/operator/operator_submit", values)
      .then((result) => {
        if (result.data.Status) {
          navigate("/operator_dashboard");
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
        <header>Operator Form</header>
        <form onSubmit={handleSubmit}>
          <div className="form first">
            <div className="details personal">
              <div className="fields">
                <div className="input-field">
                  <label htmlFor="formcode">شماره درخواست</label>
                  <input
                    type="text"
                    id="formcode"
                    placeholder="Enter Form Code"
                    onChange={(e) =>
                      setValues({ ...values, formcode: e.target.value })
                    }
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="problemdate">تاریخ بروز مشکل</label>
                  <input
                    type="datetime-local"
                    name="problemdate"
                    placeholder="Enter Machine Name"
                    id="problemdate"
                    onChange={(e) =>
                      setValues({ ...values, problemdate: e.target.value })
                    }
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="section">بخش</label>
                  <select
                    name="section"
                    id="section"
                    className="text-center"
                    onChange={(e) =>
                      setValues({ ...values, section: e.target.value })
                    }
                  >
                    <option value="chipper">Chipper</option>
                    <option value="conveyorline">Conveyor Line</option>
                    <option value="dryerairgraider">Dryer Air Grader</option>
                    <option value="refiner">Refiner</option>
                    <option value="beforepress">Before Press</option>
                    <option value="press">Press</option>
                    <option value="afterpress">After Press</option>
                    <option value="sandingrbs">Sanding</option>
                    <option value="coolingsystem">Cooling System</option>
                    <option value="steamboiler">Steam Boiler</option>
                    <option value="general">General</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="machinename">نام دستگاه</label>
                  <input
                    type="text"
                    name="machinename"
                    placeholder="Enter Machine Name"
                    id="machinename"
                    onChange={(e) =>
                      setValues({ ...values, machinename: e.target.value })
                    }
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="equipstop">مدت زمان توقف تجهیز</label>
                  <input
                    type="datetime-local"
                    name="equipstop"
                    id="equipstop"
                    onChange={(e) =>
                      setValues({ ...values, equipstop: e.target.value })
                    }
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="problemtime">
                    میزان ساعت کار تجهیز در زمان بروز عیب
                  </label>
                  <input
                    type="text"
                    name="problemtime"
                    id="problemtime"
                    placeholder="Enter Operator Name"
                    onChange={(e) =>
                      setValues({ ...values, problemtime: e.target.value })
                    }
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="problemdate">مدت زمان توقف خط تولید</label>
                  <input
                    type="datetime-local"
                    name="problemdate"
                    id="problemdate"
                    onChange={(e) =>
                      setValues({ ...values, problemdate: e.target.value })
                    }
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="shift">شیفت</label>
                  <select
                    name="shift"
                    className="text-center"
                    id="shift"
                    onChange={(e) =>
                      setValues({ ...values, shift: e.target.value })
                    }
                  >
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="suggesttime">
                    زمان پیشنهادی برای شروع تعمیر
                  </label>
                  <select
                    name="suggesttime"
                    className="text-center"
                    id="suggesttime"
                    onChange={(e) =>
                      setValues({ ...values, suggesttime: e.target.value })
                    }
                  >
                    <option value="Emergency">فوری</option>
                    <option value="Hour">ساعات آتی</option>
                    <option value="Day">اولین روز کاری</option>
                    <option value="FirstCh">در اولین فرصت</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="suggesttime">نوع کار درخواستی</label>
                  <select
                    name="suggesttime"
                    className="text-center"
                    id="suggesttime"
                    onChange={(e) =>
                      setValues({ ...values, suggesttime: e.target.value })
                    }
                  >
                    <option value="Emergency">اضطراری</option>
                    <option value="Hour">بهسازی</option>
                    <option value="Day">پایش وضعیت(غیر برنامه ای)</option>
                    <option value="FirstCh">آماده سازی برای تعمیر</option>
                    <option value="FirstCh">خدمات عمومی</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="suggesttime">
                    تعمیر و تعویض اصلاحی ناشی از
                  </label>
                  <select
                    name="suggesttime"
                    className="text-center"
                    id="suggesttime"
                    onChange={(e) =>
                      setValues({ ...values, suggesttime: e.target.value })
                    }
                  >
                    <option value="Emergency">درخواست اپراتور</option>
                    <option value="Hour">درخواست واحد نت</option>
                    <option value="Day">گزارش واحد ایمنی</option>
                    <option value="FirstCh">آماده سازی برای تعمیر</option>
                    <option value="FirstCh">خدمات عمومی</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="suggesttime">گزارش بازرسی</label>
                  <select
                    name="suggesttime"
                    className="text-center"
                    id="suggesttime"
                    onChange={(e) =>
                      setValues({ ...values, suggesttime: e.target.value })
                    }
                  >
                    <option value="Emergency">بازرسی فنی</option>
                    <option value="Hour">واحد نت</option>
                    <option value="Day">اپراتور</option>
                    <option value="Day">سایر</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="suggesttime">روش کشف عیب</label>
                  <select
                    name="suggesttime"
                    className="text-center"
                    id="suggesttime"
                    onChange={(e) =>
                      setValues({ ...values, suggesttime: e.target.value })
                    }
                  >
                    <option value="Emergency">اختلال در کارکرد</option>
                    <option value="Hour">تعمیرات دوره ای</option>
                    <option value="Day">مشاهده تصادفی</option>
                    <option value="Day">بازرسی دوره ای</option>
                    <option value="Day">تست عملکرد</option>
                    <option value="Day">پایش وضعیت دوره ای</option>
                    <option value="Day">آماده به کار نبودن در حین نیاز</option>
                    <option value="Day">در حین انجام تعیرات اصلاحی</option>
                    <option value="Day">فالت با آلارم</option>
                    <option value="Day">سایر</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="operatorname">نام اپراتور</label>
                  <input
                    type="text"
                    name="operatorname"
                    id="operatorname"
                    placeholder="Enter Operator Name"
                    onChange={(e) =>
                      setValues({ ...values, operatorname: e.target.value })
                    }
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="problemdescription">
                    کلیات شرح عیب مشاهده شده
                  </label>
                  <textarea
                    name="problemdescription"
                    id="problemdescription"
                    placeholder="Enter Problem Description"
                    onChange={(e) =>
                      setValues({
                        ...values,
                        problemdescription: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <button type="submit" className="nextBtn">
                ثبت
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OperatorSubmit;
