import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDTs3jmSImx3IRuUBVBpUJwrpNdL5W-5cA",
    authDomain: "blog-app-5335c.firebaseapp.com",
    projectId: "blog-app-5335c",
    storageBucket: "blog-app-5335c.appspot.com",
    messagingSenderId: "617913623224",
    appId: "1:617913623224:web:51f727ff3510a75a818a4d"
};

const app = initializeApp(firebaseConfig);

//google auth

const provider = new GoogleAuthProvider()

const auth = getAuth();

export const authWithGoogle = async () => {
    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err);
    })
    return user;
};