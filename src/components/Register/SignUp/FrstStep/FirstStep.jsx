/* eslint-disable react/prop-types */
import { Field, Form, Formik } from "formik";
import img from "../../../../../public/imgLand/register/wizard count1.png";
import { Link } from "react-router-dom";

const FirstStep = ({ setStepCounter }) => {
  const handleFirst = (values) => {
    console.log(values);
    setStepCounter(2);
  };

  

  return (
    <div className="rtl">
      <div className="bgStep1 w-[350px] h-[400px] mx-auto mt-20 pt-[100px]">
        
        <img src={img} className="absolute left-[100px] top-[150px] h-16"/>
        <h1 className="text-xl font-extrabold text-gray-700 text-center mb-10">
            ایجاد حساب کاربری
        </h1>
        <div className="w-[220px] mx-auto">
          <Formik initialValues={{ phoneNumber: "" }} onSubmit={handleFirst}>
            <Form>
              <Field
                name="phoneNumber"
                placeholder="  شماره موبایل  "
                className="h-[40px] w-[100%] rounded-[10px] shadow-inner bg-gray-50 mb-10"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-[#fff] rounded-full bg-gradient-to-r bg-amber-600 h-[42px] w-[150px]"
                >
                  دریافت کد تایید
                </button>
              </div>
              <div className=" text-blue-400 text-center">
                <Link to="/signIn">  ورود  </Link>
              </div>
            </Form>
          </Formik>
        </div>

      </div>

      <Link className="text-base text-gray-600 absolute left-10 bottom-5" to='/'>  صفحه اصلی  </Link>

    </div>
  );
};

export default FirstStep;
