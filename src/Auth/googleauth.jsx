import React from "react";
import GoogleIcon from "../assets/GooglepngIcon.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Googleauth = ({ sign }) => {
  const navigate = useNavigate();
  async function googleLogin() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user)
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          photo: user.photoURL,
          firstName: user.displayName,
          location: "Pls pick a location",
          
        });
        toast.success("User logged In Successfully!!", {
          position: "top-right",
          autoClose: 500, // Auto close the toast after 3 seconds
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      toast.error("Failed to log in with Google", { position: "top-right" });
      console.error(error);
    }
  }

  return (
    <div
      className="w-full cursor-pointer flex justify-center items-center my-3 border-[#dfd9d9] border-2 text-black text-md rounded-md py-2 gap-2"
      onClick={googleLogin}
    >
      <img src={GoogleIcon} alt="Google Icon" className="w-7" />
      {sign} Google
    </div>
  );
};

export default Googleauth;
