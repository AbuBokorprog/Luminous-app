"use client";
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { App } from "@/firebase.config";
import { useGetCurrentUserQuery } from "@/redux/feature/counter/api";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, SetCurrentUser] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const auth = getAuth(App);

  const { data, isLoading, isError } = useGetCurrentUserQuery(user?.email);
  SetCurrentUser(data?.user[0]);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);

  const logout = () => {
    return signOut(auth);
  };

  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const authInfo = {
    currentUser,
    createUser,
    signIn,
    logout,
    updateUser,
    loading,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
