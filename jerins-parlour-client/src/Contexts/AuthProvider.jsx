import {
  EmailAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  linkWithCredential,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut();
  };
  const updateUserProfile = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };
  const changeUserPassword = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
  };
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const deleteUserAccount = () => {
    setLoading(false);
    return deleteUser(auth.currentUser);
  };
  const singInRandom = () => {
    setLoading(true);
    return signInAnonymously(auth);
  };
  const linkAccountWithEmailAddPassword = (email, password) => {
    const emailLinkCredential = EmailAuthProvider.credential(email, password);
    return linkWithCredential(auth.currentUser, emailLinkCredential);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    singIn,
    googleSignIn,
    emailVerification,
    updateUserProfile,
    logOut,
    loading,
    changeUserPassword,
    linkAccountWithEmailAddPassword,
    deleteUserAccount,
    passwordReset,
    singInRandom,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
