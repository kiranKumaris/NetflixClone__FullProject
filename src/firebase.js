import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCjGz7GuorYgQ4kodjz8ieOXNBqBJ3xZkM",
  authDomain: "netflix-clone-aefdb.firebaseapp.com",
  projectId: "netflix-clone-aefdb",
  storageBucket: "netflix-clone-aefdb.firebasestorage.app",
  messagingSenderId: "199957095679",
  appId: "1:199957095679:web:ac6685aa069313877298ca",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1]).split("-").join(" ");
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1]).split("-").join(" ");
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signup, login, logout };
