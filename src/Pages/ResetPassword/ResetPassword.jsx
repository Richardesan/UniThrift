import React, { useState } from "react";
import { confirmPasswordReset, } from "firebase/auth";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  function rwPassword (oobCode, newPassword) {
      confirmPasswordReset(auth, )
  }

  return (
    <form className="w-[40vw] shadow-2xl mt-7 block mx-auto py-10 px-5" onSubmit={handleSubmit}>
      <h1 className="text-4xl font-bold text-center">Reset Password</h1>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="name@gmail.com"
        className="bg-white border-2 rounded-md w-full p-2 my-5 outline-none"
        required
      />
      <button
        type="submit"
        className="w-full bg-[#171717] text-white font-bold text-md rounded-md py-2"
      >
        Submit
      </button>
    </form>
  );
};

export default ResetPassword;
