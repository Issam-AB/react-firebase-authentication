import app from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDp-53BJy4e723MmoR7PFV_NSpPk1TnNlk",
    authDomain: "react-firebase-authentic-6a260.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-6a260.firebaseio.com",
    projectId: "react-firebase-authentic-6a260",
    storageBucket: "react-firebase-authentic-6a260.appspot.com",
    messagingSenderId: "1028984362452",
    appId: "1:1028984362452:web:700571430c5b21307eb241",
    measurementId: "G-TM0KZLYQHH"
    // // apiKey: process.env.REACT_APP_API_KEY,
    // // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // // projectId: process.env.REACT_APP_PROJECT_ID,
    // // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // // appId: process.env.REACT_APP_ID,
    // // measurementId: process.env.REACT_MSN_ID
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }
    doSignInWithEmailAndPassword = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    }
    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

}
export default Firebase;
// // // var firebase = new Firebase();
// // // firebase.doCreateUserWitEmailAndPassword
