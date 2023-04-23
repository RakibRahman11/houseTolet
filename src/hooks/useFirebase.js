import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../Firebase/firebase.init";

firebaseInit()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const auth = getAuth();

    // Google Sign In
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                setUser(error.message);
            });
    }

    const facebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                // const { displayName, photoURL, email } = result.user;
                console.log(result.user)
                setUser(result.user);
            })
    }

    // Create new users
    const newUser = (name, email, password) => {
        console.log(name)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const userInfo = { email, displayName: name }
                setUser(userInfo)
                console.log(userInfo)
            })
            .catch((error) => {
            });
    }

    // Email Sign In
    const userSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            })
            .catch((error) => {
                // const errorMessage = error.message;
            });
    }

    // Logout 
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else { }
        });
    })
    return {
        user,
        newUser,
        userSignIn,
        googleSignIn,
        facebookSignIn,
        logOut
    }
};

export default useFirebase;