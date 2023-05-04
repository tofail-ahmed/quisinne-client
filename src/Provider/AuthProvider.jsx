import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const Authcontext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);


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
            updateUserProfile

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