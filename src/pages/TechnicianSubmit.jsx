/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./submitstyle.css";
import { Modal } from "react-modal";


function TechnicianSubmit() {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
  const handleSelectChange = (e) => {
    const value = e.target.value
    setValues({ ...values, instructions: value })
    setIsModalOpen(value === 'بله')
  }
  const closeModal = () => {
    setIsModalOpen(false)
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
                  <label htmlFor="instructions">آیا برای انجام تعمیر دستورالعمل تهیه شده است ؟
                  </label>
                  <select
                    name="instructions"
                    id="instructions"
                    className="text-center"
                    onChange={handleSelectChange}
                  >
                    <option value="بله">بله</option>
                    <option value="خیر">خیر</option>
                  </select>
                  <Modal isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="additional input modal">
                    <div className="input-field">
                      <input type="text" name="instructionsmodal" id="instructionsmodal" placeholder="شماره دستورالعمل را وارد کنید" className="text-center" />
                    </div>
                    <button onClick={closeModal}>خروج</button>
                  </Modal>
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
                    <option value="Chipper">Chipper</option>
                    <option value="Conveyor Line">Conveyor Line</option>
                    <option value="Dryer & Air Grader">
                      Dryer & Air Grader
                    </option>
                    <option value="Refiner">Refiner</option>
                    <option value="Before Press">Before Press</option>
                    <option value="Press">Press</option>
                    <option value="After Press">After Press</option>
                    <option value="Sanding">Sanding</option>
                    <option value="Cooling System">Cooling System</option>
                    <option value="Steam Boiler">Steam Boiler</option>
                    <option value="General">General</option>
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
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
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
                    <option value="فوری">فوری</option>
                    <option value="ساعات آتی">ساعات آتی</option>
                    <option value="اولین روز کاری">اولین روز کاری</option>
                    <option value="در اولین فرصت">در اولین فرصت</option>
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
                    <option value="اضطراری">اضطراری</option>
                    <option value="بهسازی">بهسازی</option>
                    <option value="پایش وضعیت(غیر برنامهای)">
                      پایش وضعیت(غیر برنامه ای)
                    </option>
                    <option value="آماده سازی برای تعمیرات">
                      آماده سازی برای تعمیر
                    </option>
                    <option value="خدمات عمومی">خدمات عمومی</option>
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
                    <option value="درخواست اپراتور">درخواست اپراتور</option>
                    <option value="درخواست واحد نت">درخواست واحد نت</option>
                    <option value="گزارش واحد ایمنی">گزارش واحد ایمنی</option>
                    <option value="آماده سازی برای تعمیر">
                      آماده سازی برای تعمیر
                    </option>
                    <option value="خدمات عمومی">خدمات عمومی</option>
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
                    <option value="بازرسی فنی">بازرسی فنی</option>
                    <option value="واحد نت">واحد نت</option>
                    <option value="اپراتور">اپراتور</option>
                    <option value="سایر">سایر</option>
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
                    <option value="اختلال در کارکرد">اختلال در کارکرد</option>
                    <option value="تعمیرات دوره ای">تعمیرات دوره ای</option>
                    <option value="مشاهده تصادفی">مشاهده تصادفی</option>
                    <option value="بازرسی دوره ای">بازرسی دوره ای</option>
                    <option value="تست عملکرد">تست عملکرد</option>
                    <option value="پایش وضعیت دوره ای">
                      پایش وضعیت دوره ای
                    </option>
                    <option value="آماده به کار نبودن در حین نیاز">
                      آماده به کار نبودن در حین نیاز
                    </option>
                    <option value="در حین انجام تعمیرات اصلاحی">
                      در حین انجام تعیرات اصلاحی
                    </option>
                    <option value="فالت با آلارم">فالت با آلارم</option>
                    <option value="سایر روش ها">سایر</option>
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

export default TechnicianSubmit;
