/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./submitstyle.css";

function SubmitForm() {
  const [values, setValues] = useState({
    formcode: "",
    problemdate: "",
    section: "",
    machinename: "",
    equipstop: "",
    failuretime: "",
    productiontime: "",
    shift: "",
    suggesttime: "",
    worksuggest: "",
    fixrepair: "",
    reportinseption: "",
    faultdm: "",
    operatorname: "",
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
        <header>ثبت فرم</header>
        <form onSubmit={handleSubmit}>
          <div className="form first">
            <div className="details personal">
              <div className="fields">
                <div className="input-field">
                  <label htmlFor="formcode">شماره درخواست</label>
                  <input
                    type="text"
                    id="formcode"
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
                    placeholder="نام بخش را وارد کنید"
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
                    placeholder="نام دستگاه را وارد کنید"
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
                  <label htmlFor="failuretime">
                    میزان ساعت کار تجهیز در زمان بروز عیب
                  </label>
                  <input
                    type="text"
                    name="failuretime"
                    id="failuretime"
                    placeholder="میزان ساعت کار را وارد کنید"
                    onChange={(e) =>
                      setValues({ ...values, failuretime: e.target.value })
                    }
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="productiontime">مدت زمان توقف خط تولید</label>
                  <input
                    type="datetime-local"
                    name="productiontime"
                    id="productiontime"
                    onChange={(e) =>
                      setValues({ ...values, productiontime: e.target.value })
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
                    <option value="emergency">فوری</option>
                    <option value="hour">ساعات آتی</option>
                    <option value="day">اولین روز کاری</option>
                    <option value="firstch">در اولین فرصت</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="worksuggest">نوع کار درخواستی</label>
                  <select
                    name="worksuggest"
                    className="text-center"
                    id="worksuggest"
                    onChange={(e) =>
                      setValues({ ...values, worksuggest: e.target.value })
                    }
                  >
                    <option value="emwork">اضطراری</option>
                    <option value="medwork">بهسازی</option>
                    <option value="setiuationwork">
                      پایش وضعیت(غیر برنامه ای)
                    </option>
                    <option value="preparerepair">آماده سازی برای تعمیر</option>
                    <option value="generalrepair">خدمات عمومی</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="fixrepair">
                    تعمیر و تعویض اصلاحی ناشی از
                  </label>
                  <select
                    name="fixrepair"
                    className="text-center"
                    id="fixrepair"
                    onChange={(e) =>
                      setValues({ ...values, fixrepair: e.target.value })
                    }
                  >
                    <option value="operatorreq">درخواست اپراتور</option>
                    <option value="netreq">درخواست واحد نت</option>
                    <option value="hsereq">گزارش واحد ایمنی</option>
                    <option value="fixrepairreq">آماده سازی برای تعمیر</option>
                    <option value="generalreq">خدمات عمومی</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="reportinseption">گزارش بازرسی</label>
                  <select
                    name="reportinseption"
                    className="text-center"
                    id="reportinseption"
                    onChange={(e) =>
                      setValues({ ...values, reportinseption: e.target.value })
                    }
                  >
                    <option value="inseptech">بازرسی فنی</option>
                    <option value="netreport">واحد نت</option>
                    <option value="operatorreport">اپراتور</option>
                    <option value="etcreport">سایر</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="faultdm">روش کشف عیب</label>
                  <select
                    name="faultdm"
                    className="text-center"
                    id="faultdm"
                    onChange={(e) =>
                      setValues({ ...values, faultdm: e.target.value })
                    }
                  >
                    <option value="disruptionwork">اختلال در کارکرد</option>
                    <option value="periodicrepairs">تعمیرات دوره ای</option>
                    <option value="randomobservation">مشاهده تصادفی</option>
                    <option value="periodicobservation">بازرسی دوره ای</option>
                    <option value="performancetesting">تست عملکرد</option>
                    <option value="periodicstatusmonitoring">
                      پایش وضعیت دوره ای
                    </option>
                    <option value="notready">
                      آماده به کار نبودن در حین نیاز
                    </option>
                    <option value="correctiverepairs">
                      در حین انجام تعیرات اصلاحی
                    </option>
                    <option value="alarmfault">فالت با آلارم</option>
                    <option value="etcfault">سایر</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="operatorname">نام اپراتور</label>
                  <input
                    type="text"
                    name="operatorname"
                    id="operatorname"
                    placeholder="نام اپراتور را وارد کنید"
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

export default SubmitForm;
