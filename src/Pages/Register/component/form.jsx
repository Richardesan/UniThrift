import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Googleauth from "../../../Auth/googleauth";
import Xicon from "../../../assets/xlogo.jpg";
import { userSchema } from "../userValidation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../Auth/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';

const onSubmit = async (values, actions) => {
  try {
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        photo: "",
        firstName: user.displayName,
        location: values.location
      });
      toast.success("User Registered Successfully!!", { position: "top-right" });
      actions.resetForm();
      setTimeout(() => {
        history.push('/login');
      }, 1000);
    }
  } catch (error) {
    toast.error(error.message, { position: "top-right" });
    console.error(error);
  }
};

const Form = () => {
  const {
    handleBlur,
    values,
    touched,
    isSubmitting,
    errors,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      location: "",
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <form className="px-40 max-md:px-10" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="name@gmail.com"
        className={`bg-white border-2 rounded-md w-full p-2 outline-none ${
          errors.email && touched.email ? "border-[#ff4949]" : "border-[#dfd9d9] mb-6"
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
        type="password"
        placeholder="Password"
        id="password"
        className={`bg-white border-2 rounded-md w-full p-2 outline-none ${
          errors.password && touched.password ? "border-[#ff4949]" : "border-[#dfd9d9]"
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

      
      <select
        id="location"
        className={`bg-white border-2 rounded-md w-full p-2 mt-5 outline-none ${
          errors.location && touched.location ? "border-[#ff4949]" : "border-[#dfd9d9] mb-5"
        }`}
        value={values.location}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="">--Select your location--</option>
        <option value="Fedral University of Technology Akure">
          Fedral University of Technology Akure
        </option>
      </select>
      {errors.location && touched.location && (
        <p className="text-[0.7rem] ml-1 my-2 uppercase font-bold text-[#f74343]">
          {errors.location}
        </p>
      )}
      <button
        disabled={isSubmitting}
        className={`w-full bg-[#171717] text-white font-bold text-md rounded-md py-2 ${
          isSubmitting ? "bg-opacity-50" : "bg-opacity-100"
        }`}
        type="submit"
      >
        Sign Up
      </button>
      <p className="text-sm py-2 text-[#575151]">
        already have an account?{" "}
        <Link to="/login">
          <span className="font-bold text-black">Sign in</span>
        </Link>
      </p>
      <p className="text-center">or</p>
      <Googleauth sign={"Sign up with"} />
      <div className="w-full cursor-pointer flex justify-center items-center bg-black text-white gap-2 text-md rounded-md py-2 mb-10">
        Sign up with
        <img src={Xicon} alt="X Icon" className="w-8" />
      </div>
    </form>
  );
};

export default Form;
