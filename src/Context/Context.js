import React, { createContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword ,getAuth, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const Context = ({children}) => {
    const [user, setUser] = useState({});

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return unsubscribe();
    }, [] )


    const userInfo = {
        user,
        setUser,
        createNewUser,
        updateUser,
        userLogin,
        logoutUser,
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Context;