import firebase from "firebase/app";
import * as firebaseui from 'firebaseui'
import "firebase/auth";
import { firebaseConfig } from "./keys";

firebase.initializeApp(firebaseConfig);

export const authPage = new firebaseui.auth.AuthUI(firebase.auth());
export const authConfig = {
    signInSuccessUrl: '/',
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],

    // Other config options...
}

export default firebase;