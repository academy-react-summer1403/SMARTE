/* eslint-disable react/prop-types */
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import img from "../../../../../public/imgLand/register/step 2 _ signup.png";


const SecondStep = ({ setStepCounter }) => {

    const handleSecond = (values) => {
        console.log(values);
        setStepCounter(3);
      };


    return (
    <div>
        <div className="bgStep2 w-[350px] h-[400px] mx-auto mt-20 pt-[50px]">
        
            <img src={img} className="absolute left-[100px] top-[253px] h-16"/>
            <h1 className="text-xl font-extrabold text-gray-700 text-center mb-3">
                کد تایید
            </h1>
            <h2 className=" text-sm text-gray-600 text-center mb-14">
                کد تایید به شماره شما ارسال شده است
            </h2>

            <div className="w-[220px] mx-auto">
                <Formik initialValues={{ phoneNumber: "" }} onSubmit={handleSecond}>
                    <Form>
                    <Field
                        name="phoneNumber"
                        // placeholder=""
                        className="h-[40px] w-[100%]  rounded-[10px] shadow-inner bg-gray-50 mb-16 text-center"
                    />
                    <div className="flex justify-center">
                        <button
                        type="submit"
                        className="text-[#fff] rounded-full bg-gradient-to-r bg-amber-600 h-[42px] w-[150px]"
                        >
                        ایجاد حساب 
                        </button>
                    </div>
                    <div className=" text-blue-400 text-center text-sm mt-3">
                        <Link to="/register">  ارسال دوباره کد  </Link>
                    </div>
                    </Form>
                </Formik>
            </div>

        </div>

        <button className="text-base text-gray-600 mr-10 mt-4" onClick={() => setStepCounter(1)}>  مرحله قبلی  </button>

    </div>
    );
}
 
export default SecondStep;