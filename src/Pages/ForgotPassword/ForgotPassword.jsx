import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Auth/firebase";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Check your email for a password reset link", { position: "top-right" });
      setEmail(""); // Reset the email input
      setTimeout(() => {
        window.location.href = "/login";
      }, 700);
    
    } catch (err) {
      toast.error(err.message, { position: "top-right" });
    }
  };

  return (
    <form className="w-[40vw] shadow-2xl mt-7 block mx-auto py-10 px-5" onSubmit={handleSubmit}>
      <h1 className="text-4xl font-bold text-center">Forget Password</h1>
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

export default ForgotPassword;
