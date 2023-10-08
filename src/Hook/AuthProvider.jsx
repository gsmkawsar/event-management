import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)

    }

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        } )
        return () => {
            unSubscribe()
        }
    }, [])

    const googleProvider = new GoogleAuthProvider();



    const googleSingIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const AuthInfo = {
        googleSingIn,
        createUser,
        singIn,
        logOut,
        user,
        loading
  
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;