import React from 'react'
import {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import app from '../Config/firebase';

function Signup() {

    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')
    const[name,setusername] = useState('')

    console.log(email)
    console.log(password)
    console.log(name)

    const UserSign = (e) =>{
       e.preventDefault()
       
       
       
  }  
    let obj = {
        name1 : "ahmed",
        id : 405,
        inst : "saims"
    }
    console.log(obj)

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((Successfull) => {
         const user = Successfull.user;
         })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
      });

    return (
        <div>
      <div className="border border-1px">
      <form onSubmit={UserSign} className="text-center">
        <h1>UserSignup</h1>
       <input type = "text" value={name} placeholder="username" onChange={(a => setusername(a.target.value))}></input>
        <br></br>
        <br></br>
        <input type = "password" value={password} placeholder="password" onChange={(a => setpassword(a.target.value))}></input>
        <br></br>
        <br></br>
        <input type = "text" value={email} placeholder="email" onChange={(a => setemail(a.target.value))}></input>
        <br></br>
        <br></br>
        <button>Signup</button>
       </form>
      </div>
            
        </div>
    )
}

export default Signup
