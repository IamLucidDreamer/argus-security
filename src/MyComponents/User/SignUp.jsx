import React, { useState } from "react";
import logo from "./../../argus website/PNG/Logo Vectors.png";
import Header from "../Partials/Header";
import Header2 from "../Partials/Header2";
import MobileHeader from "../Partials/MobileHeader";
import Stickynav from "../Partials/Stickynav";
import { useFormik } from "formik";
import Alert from "../Components/Alert";
import { API } from "../../api";
import axios from "axios";

const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be atleast 6 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const SignUp = () => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      axios
        .post(`${API}/signup`, values, {
          headers: {
            Accept: "application/JSON",
            "Content-Type": "application/JSON",
          },
        })
        .then((response) => {
          setShowAlert({
            show: true,
            message: "Registered successfully",
            success: true,
          });
          resetForm();
        })
        .catch((err) => {
          setShowAlert({
            show: true,
            message: err.response.data.error,
            success: false,
          });
          resetForm();
        });
    },
  });

  return (
    <div>
      <Header />
      <Header2 />
      <MobileHeader />
      <Stickynav />

      <div className="p-20 h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center bg-hero">
        <div className="content text-3xl text-center md:text-left lg:w-2/3">
          <h1 className="text-5xl text-gray-700 font-bold">Argus Security</h1>
          <p>Your partners in protection</p>
        </div>
        <div className="container mx-auto flex flex-col items-center">
          <form
            className="shadow-lg w-96 p-4 flex flex-col bg-white rounded-lg items-center justify-center"
            onSubmit={handleSubmit}
          >
            {showAlert.show ? (
              <Alert alert={showAlert} rmAlert={setShowAlert} />
            ) : null}
            <img src={logo} alt="Logo" className="w-20 mb-3" />
            <div classname="w-full flex flex-col item-center">
              <hr className="w-1/3 border-1 border-black" />
              <p>or</p>
              <hr className="w-1/3 border-1 border-black" />
            </div>
            <input
              className="w-full mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1"
              type="email"
              placeholder="Email"
              {...getFieldProps("email")}
            />
            {/* Error for email */}
            {errors.email ? <div>{errors.email}</div> : null}

            <input
              className="w-full mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1"
              type="password"
              placeholder="Password"
              {...getFieldProps("password")}
            />
            {/* Error for password */}
            {errors.password ? <div>{errors.password}</div> : null}

            <button
              className="w-1/2 bg-red-700 text-white p-3 rounded-lg font-semibold text-lg"
              type="submit"
            >
              Next
            </button>
            <p className="text-gray-900 font-bold text-center my-2">
              Already Registered?<span className="text-blue-500"> Log In</span>{" "}
            </p>
            <hr className="border-1 border-black w-full" />
            <p className="text-gray-900 text-center text-sm my-2">
              By clicking on next, you acknowledge that you have read and
              accepted the Terms of Service and the Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
