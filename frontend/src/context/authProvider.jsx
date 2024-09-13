import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore as Database } from 'firebase/firestore'
import { createContext } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };

  initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = Database();



  return (
    <AuthContext.Provider value={{ auth, db }}>
      {children}
    </AuthContext.Provider>
  )
}