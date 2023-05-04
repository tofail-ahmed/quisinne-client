import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const Authcontext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      const googleAuthProvider = new GoogleAuthProvider()
      const githubAuthprovider = new GithubAuthProvider();

      const createUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password);
      }


      const signIn = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }
      const updateUserProfile = (name, photoUrl) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photoUrl,
            });
      };

      const googleSignIn = (email, password) => {
            return signInWithPopup(auth, googleAuthProvider)
      }

      const githubSignIn=()=>{
            return signInWithPopup(auth,githubAuthprovider)
      }


      const logOut = () => {
            return signOut(auth)
      }


      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
                  setLoading(false)
            })
            return () => {
                  return unsubscribe
            }
      }, [])


      const authInfo = {
            user,
            createUser,
            signIn,
            logOut,
            loading,
            updateUserProfile,
            googleSignIn,
            githubSignIn

      }



      return (
            <div>
                  <Authcontext.Provider value={authInfo}>
                        {children}
                  </Authcontext.Provider>
            </div>


      );
};

export default AuthProvider;