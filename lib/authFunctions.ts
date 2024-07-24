// authFunctions.ts
import { auth } from '../firebaseConfig'; // Adjust the path as needed
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Signup Function
export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error; // Rethrow or handle error as needed
  }
};

// Login Function
export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Rethrow or handle error as needed
  }
};
