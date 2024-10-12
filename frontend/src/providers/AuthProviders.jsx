import React, { createContext, useState } from "react";
import { firebaseApp } from "../firebase/firebase.config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const [user, setUpser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(firebaseApp);
  // User Login
  const LoginInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    LoginInUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
