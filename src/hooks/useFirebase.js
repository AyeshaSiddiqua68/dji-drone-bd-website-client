import firebaseInitialization from "../firebase/firebase.init";
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword,
    updateProfile, sendEmailVerification, sendPasswordResetEmail
} from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialization()

//provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();


const auth = getAuth();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [loading, setLoading] = useState(true);

    //clear error state
    useEffect(() => {
        setTimeout(() => {
            setError("")
        }, 5000)
    }, [error]);

    //google sign in
    function signInWithGoogle() {
        return signInWithPopup(auth, googleProvider);
    }

    //github sign in
    function signInWithGithub() {
        return signInWithPopup(auth, githubProvider)
    }

    //facebook sign in
    function signInWithFacebook() {
        return signInWithPopup(auth, facebookProvider)
    }

    //email password sign in
    function signInWithEmail(e) {
        e.preventDefault();
        return signInWithEmail(auth, email, password)
    }

    //update user profile by setting name & image url
    function setNameAndImage() {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {

        }).catch((error) => {
            setError(error.message);
        });

    }
    //Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
            if (signedInUser) {
                setUser(signedInUser);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

    //sign out
    function logOut() {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.meassage)
        });
    }

    //sign up with email and password
    function signUp(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setNameAndImage();
                emailVerify();
                alert("User has been created");
            }).catch(err => {
                setError(err.meassage)
            })

    }

    //get email and get password function
    function getEmail(e) {
        setEmail(e?.target?.value)
    }
    function getPassword(e) {
        setPassword(e?.target?.value)
    }

    //get name
    function getName(e) {
        setName(e?.target?.value)
    }
    //get photo url
    function getPhoto(e) {
        setPhoto(e?.target?.value)
    }

    //email verification
    function emailVerify() {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert(`A verification mail has been sent to ${email}`)
            });
    }
    //reset password by sending email
    function passwordReset(e) {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email has been sent")
            })
            .catch((err) => {
                setError(err.meassage);
            });
    }


    return {
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        signInWithEmailAndPassword: signInWithEmail,
        user,
        setUser,
        error,
        setError,
        logOut,
        getPassword,
        getEmail,
        signUp,
        getName,
        getPhoto,
        passwordReset,
        loading
    };
};

export default useFirebase;