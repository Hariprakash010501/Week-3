import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { loginUser } from '../redux/actions/authActions'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
export default function Login() {
    const [Email, setEmail]= useState('')
    const [Password, setPassword]= useState('')
    const dispatch=useDispatch()
    const token=useSelector((state)=>state.isAuth.token)
    const handSubmit=(e)=>{
        e.preventDefault()  
        axios
            .post("https://reqres.in/api/login",{email:Email,password:Password})
            .then((event) => dispatch(loginUser(event.data.token)))
    }
    const handChange=(event)=>{
      setEmail(event.target.value)
    }
    const HandChange=(event)=>{
      setPassword(event.target.value)
    }
    if (token) return <Navigate to="/"/>;
    
    return (
    
    <div className="formDesign">
        <form onSubmit={handSubmit}
    style={{
      display: "flex",
      flexDirection: "column",
      width: "25%",
      margin: "auto",
      gap: "25px",
      marginTop: "25px"
    }}
  >
    <input
      type="text"
      placeholder="Enter your Email ID"
      onChange={handChange}
    />
    <input
      type="password"
      placeholder="Enter your password"
      onChange={HandChange}
    />
    <input type="submit"></input>
  </form>
    </div>
  )
}
