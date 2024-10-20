import React, { createContext, useEffect, useState } from "react";
import { authApp } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const authProvider = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUpser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(authApp);

  //   User Registration
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // User Login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const resetPassword =(email)=>{
    setLoading(true)
    return sendPasswordResetEmail(email);
  }
  const uploadUserProfile = (name, photo, number) => {
    setLoading(true)
    return updateProfile( auth.currentUser,{
        displayName: name,
        photoURL: photo,
        phoneNumber: number

    } )
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUpser(currentUser);
      setLoading(false);
      console.log(currentUser);
      
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    loginUser,
    loading,
    setLoading,
    user,
    createUser,
    logOut,
    resetPassword,
    uploadUserProfile
  };
  console.log(user);
  
  return (
    <authProvider.Provider value={authInfo}>{children}</authProvider.Provider>
  );
};

export default AuthProviders;
