import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "./firebase";

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success("User logged out successfully!", { position: "top-right" });
      setTimeout(() => {
        navigate("/");
        window.location.reload(); // Reload the page after navigating
      }, 1000);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <p onClick={handleLogout} className="cursor-pointer px-3 hover:bg-hoverCol">
        Log out
      </p>
    </div>
  );
};

export default LogOut;
