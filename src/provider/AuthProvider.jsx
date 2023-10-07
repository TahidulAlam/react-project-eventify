/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from "react";
import auth from "../utils/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = { createUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
