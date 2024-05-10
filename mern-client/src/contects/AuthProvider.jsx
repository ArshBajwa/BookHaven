import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
export const AuthContext = createContext();
const googleProvider=new GoogleAuthProvider();
import { signInWithEmailAndPassword } from 'firebase/auth'
import { signOut    } from 'firebase/auth';
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const newUser = userCredential.user;
            setUser(newUser);
            setLoading(false);
            return newUser;
        } catch (error) {
            setLoading(false);
            console.error('Error creating user:', error.message);
            throw error;
        }
    };
    const  loginwithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
         return signOut(auth);
    }
   useEffect(()=>{
         const unsubcribe=onAuthStateChanged(auth,currentUser=>{
            //    console.log(currentUser);
               setUser(currentUser);
               setLoading(false);
         });
         return ()=>{
            return unsubcribe();
         }
   },[])
   
    const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        loading,
        login,
        logout
    };
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

