import React, { useEffect, useState } from 'react';
import Header from "./components/Ui/Header";
import Footer from "./components/Ui/Footer";
import { auth, db } from "./Auth/firebase";
import { getDoc, doc } from 'firebase/firestore';
import Home from './Pages/Home/Home';
export const UserContext = React.createContext();
const App = () => {
  const [userDetails, setUserDetails] = useState(null);

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



  return (
    <div className='overflow-hidden'>
     <UserContext.Provider value={userDetails}>
        <Header />
    <Home/>
    <Footer/>
      </UserContext.Provider>
    </div>
  );
};

export default App;
