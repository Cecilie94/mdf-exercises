import "@/configs/firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth();

export const onSignOut = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    console.log(e);
  }
};

// state change to display log out instead of login
export const stateChange = (callback) => {
  onAuthStateChanged(auth, callback);
};

export const signIn = async (email, password) => {
  try {
    const userData = await signInWithEmailAndPassword(auth, email, password);

    return {
      uid: userData.user.uid,
    };
    console.log(userData);
  } catch (e) {
    console.log(e);
    return null;
  }
};
