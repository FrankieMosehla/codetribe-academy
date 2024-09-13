import { useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { AuthContext } from "../context/authProvider";
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";

export default function useAuth () {
    const { auth, db } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [currentuseremail, setCurrentuseremail] = useState('');
    const sing_up = async () => {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        const userid = user.uid; 
        
        await addDoc(collection(db, 'users'), {
            _id : userid,
            username,
            email
        });        
    }
    const getCurrentUser = async () => {
            onAuthStateChanged(auth, async user => {
            if(user) {
                const queryuser = query(collection(db, "users"), where("email" , "==", user.email));
                const queried_user = await getDocs(queryuser);
                queried_user.forEach(user => {
                    console.log(user.data().username);
                })
                
            } else {
                return null
            }
        })
    }

    useEffect(() => {
        getCurrentUser()
    }, [])

    return { sing_up, setEmail, setPassword, setUsername }
}