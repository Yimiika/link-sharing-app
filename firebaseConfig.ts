import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "link-sharing-application-e3722.firebaseapp.com",
  projectId: "link-sharing-application-e3722",
  storageBucket: "link-sharing-application-e3722.appspot.com",
  messagingSenderId: "550820641835",
  appId: "1:550820641835:web:56636251d45c352c3efe6e",
  measurementId: "G-SW7MEGC54T"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
