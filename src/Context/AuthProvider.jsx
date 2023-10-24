import { createContext, useEffect, useState } from "react"
import auth from './../Firebase/firebase.config';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";



export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)


const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}




useEffect(()=> {
const unsubscribe = onAuthStateChanged(auth,currentUser => {
setUser(currentUser);
console.log(currentUser)
setLoading(false)
})
return () =>{
    return unsubscribe();
}
 } ,[])


const AuthValue = {user, loading,createUser, signIn}

  return (
<AuthContext.Provider value = {AuthValue}>
{children}
</AuthContext.Provider>
  )
}

export default AuthProvider;
