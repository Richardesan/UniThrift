import React, { useEffect, useState } from 'react';
import { auth, db } from "../../Auth/firebase";
import { getDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("User is not logged In");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success("User logged out successfully!", { position: "top-right" });
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      {userDetails ? (
        <div>
          <h1 className='font-bold 5xl capitalize'>Email: {userDetails.email}</h1>
          <h1 className='font-bold 5xl capitalize'>Name: {userDetails.firstName}</h1>
          <h1 className='font-bold 5xl capitalize'>Name: {userDetails.location}</h1>
        
          <button className='p-2 px-10 bg-slate-400 text-white font-bold' onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default Profile;
