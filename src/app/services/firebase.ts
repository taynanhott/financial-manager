import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDINqNZN40EICQoYmTKNZrJh61PNvRt8Co",
  authDomain: "auth-financial.firebaseapp.com",
  projectId: "auth-financial",
  storageBucket: "auth-financial.appspot.com",
  messagingSenderId: "191796329328",
  appId: "1:191796329328:web:5133f5c2533069dd5e2db5"
};

const app = initializeApp(firebaseConfig);
export default app
export const auth = getAuth(app);