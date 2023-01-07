import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <button disabled="true">Logout</button>
    </div>
  )
}
export default Navbar