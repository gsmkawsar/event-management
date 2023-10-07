import { createContext } from "react";
import app from "./firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();



    const googleSingIn = () => {
        return signInWithPopup(auth, provider);
    }

    const AuthInfo = {
        googleSingIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;