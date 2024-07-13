import React from "react";
import { Formik, useFormik } from "formik";
import { Link } from "react-router-dom";
import GoogleIcon from "../../../assets/GooglepngIcon.png";
import Xicon from "../../../assets/xlogo.jpg";
import { userSchema } from "../UserValidation";
import Googleauth from "../../../Auth/googleauth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Auth/firebase";
import { toast } from "react-toastify";
const onSubmit = async (values, actions) => {
  console.log(values);
 
  try {
    await signInWithEmailAndPassword(auth, values.email, values.password)
    console.log("User Registerd Successfully!")
    toast.success("User Registered Successfully!!", {
     position: "top-right"
    })

    setTimeout(() => {
      window.location.href = "/profile";
    }, 700);
    actions.resetForm()
  } catch (error) {
    console.log(error.message)
    toast.error(error.message, {
        position: "top-right"
       })
  }
};

const Form = () => {
  const { handleBlur, values, touched, isSubmitting, errors, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: userSchema,
      onSubmit,
    });


  return (
    <form className="px-40 max-md:px-10" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="name@gmail.com"
        className={`bg-white  border-2 rounded-md w-full p-2  outline-none ${
          errors.email && touched.email
            ? "border-[#ff4949] "
            : "border-[#dfd9d9] mb-6"
        }`}
        id="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email && (
        <p className="text-[0.7rem] ml-1 mt-1 mb-5 uppercase font-bold text-[#f74343]">
          {errors.email}
        </p>
      )}
      <input
        type="Password"
        placeholder="Password"
        id="password"
        className={`bg-white  border-2 rounded-md w-full p-2  outline-none ${
          errors.password && touched.password
            ? "border-[#ff4949]"
            : "border-[#dfd9d9]"
        }`}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      {errors.password && touched.password && (
        <p className="text-[0.7rem] ml-1 mt-1 uppercase font-bold text-[#f74343]">
          {errors.password}
        </p>
      )}

      <p className="text-end font-semibold text-sm cursor-pointer mb-2">
     <Link to="/forgot-pw">Forgot Password</Link>   
      </p>
      <button
      disabled={isSubmitting}
        className={`w-full bg-[#171717] text-white font-bold text-md rounded-md py-2 ${isSubmitting? "bg-opacity-50": "bg-opacity-100"}`}
        type="submit"
      >
        Sign in
      </button>
      <p className="text-sm py-2 text-[#575151]">
        Dont have an account?{" "}
        <Link to="/register">
          <span className="font-bold text-black">Sign up</span>
        </Link>
      </p>
      <p className="text-center">or</p>

      <Googleauth sign={"Continue with"}/>
      <div className="w-full cursor-pointer flex justify-center items-center bg-black text-white gap-2  text-md rounded-md py-2 mb-10">
        continue with
        <img src={Xicon} alt={Xicon} className="w-8 " />
      </div>
    </form>
  );
};

export default Form;
