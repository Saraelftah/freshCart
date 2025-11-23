import { useFormik } from "formik";

import logo from "../../assets/whiteLogo.png";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  // validation schema
  let validationSchema = Yup.object().shape({
    email: Yup.string().email("email is invalid").required("email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      )
      .required("passsword is required"),
  });

  // handle Login
  function handleLogin(formValues) {
    setisLoading(true);
    console.log(formValues);
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formValues)
      .then((apiResponse) => {
        console.log(apiResponse);
        navigate("/");
        setisLoading(false);
        toast.success("Loged in Successfully!");
      })

      .catch((apiResponse) => {
        console.log(apiResponse);
        setisLoading(false);
        toast.error(apiResponse?.response?.data?.message);
      });
  }

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <>
      <div className="flex justify-center items-center layout">
        <div className="lg:w-1/3 m-auto py-15 px-5 bg-neutral-800/75 rounded-md">
          <div className="mb-5">
            <img src={logo} alt="logo" className="m-auto w-30" />
            <p className="text-greenValley font-kaushan text-center">
              Your fresh choice!
            </p>
          </div>
          <form onSubmit={formik.handleSubmit} className="lg:w-3/4 m-auto">
            {/* email */}
            <div className="relative z-0 mt-5">
              <input
                type="text"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="off"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-greenValley focus:outline-none focus:ring-0 focus:border-greenValley peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-greenValley peer-focus:dark:text-greenValley peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email
              </label>
            </div>
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-500 text-xs md:text-sm mt-1">
                <i class="fa-solid fa-exclamation"></i>
                <span> {formik.errors.email} </span>
              </div>
            ) : null}

            {/* password */}
            <div className="relative z-0 mt-5">
              <input
                type="text"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="off"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-greenValley focus:outline-none focus:ring-0 focus:border-greenValley peer"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-greenValley peer-focus:dark:text-greenValley peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Password
              </label>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <div className="text-red-500 text-xs md:text-sm mt-1">
                <i className="fa-solid fa-exclamation"></i>
                <span> {formik.errors.password} </span>
              </div>
            ) : null}

            {/* login button */}
            <div className="flex items-baseline gap-3">
              <button
                type="submit"
                className="btn mt-5 bg-greenValley text-white border-greenValley shadow-sm  hover:text-greenValley hover:bg-transparent duration-500!"
              >
                {isLoading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  "Login"
                )}
              </button>

              <span className="text-white">
                Don't have account yet?{" "}
                <Link
                  to="/register"
                  className="font-semibold hover:text-greenValley duration-500!"
                >
                  Signup
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
