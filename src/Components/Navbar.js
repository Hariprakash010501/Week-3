import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/actions/authActions'
const Navbar = () => {
  const token = useSelector((state)=>state.isAuth.token)
  const dispatch=useDispatch()
  const handClick=()=>{
    window.location.reload()
  }
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      
      {dispatch(logoutUser(token))?<></>:<></>}
      {token?<button onClick={handClick}>Logout</button>:<button disabled="true">Logout</button>}</div>
  )
}
export default Navbar