import { Field, Form, Formik } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import img from "../../../../../public/imgLand/register/step 3_ signup.png";


const ThirdStep = ({ setStepCounter }) => {

    const Navigate = useNavigate()
    const handleThird = (values)=>{
        console.log(values);
        Navigate('/')
    }


    return (
    <div>
        <div className="bgStep3 w-[350px] h-[400px] mx-auto mt-20 pt-[30px]">
            
            <img src={img} className="absolute left-[100px] top-[364px] h-16"/>
            <h1 className="text-xl font-extrabold text-gray-700 text-center mb-5">
                ورود به حساب کاربری
            </h1>

            <div className="w-[220px] mx-auto">
                <Formik initialValues={{ email: "" , password: "" }} onSubmit={handleThird}>
                    <Form>
                    <Field
                        name="email"
                        placeholder="  ایمیل  "
                        className="h-[40px] w-[100%]  rounded-[10px] shadow-inner bg-gray-50 mb-3"
                    />
                    <Field
                        name="password"
                        placeholder="  رمز عبور  "
                        className="h-[40px] w-[100%]  rounded-[10px] shadow-inner bg-gray-50 mb-3"
                    />
                    <Field
                        name="repeatpassword"
                        placeholder="  تایید رکز عبور  "
                        className="h-[40px] w-[100%]  rounded-[10px] shadow-inner bg-gray-50 mb-2"
                    />
                    <div className="flex justify-center mb-5">
                        <input type="checkbox" className="w-4 h-4" />
                        <h2 className="text-sm">  مرا به خاطر بسپار  </h2>
                    </div>
                    <div className="flex justify-center">
                        <button
                        type="submit"
                        className="text-[#fff] rounded-full bg-gradient-to-r bg-amber-600 h-[42px] w-[150px]"
                        >
                        ورود به حساب کاربری
                        </button>
                    </div>
                    </Form>
                </Formik>
            </div>

        </div>

        <button className="text-base text-gray-600 mr-10 mt-4" onClick={() => setStepCounter(2)}>  مرحله قبلی  </button>

    </div>
    );
}
 
export default ThirdStep;