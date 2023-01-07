import React from 'react'
import ProductListing from './ProductListing'
export const Login = () => {
  return (
    <div><form
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
    />
    <input
      type="password"
      placeholder="Enter your password"
    />
    <button onClick={<ProductListing />}>Submit</button>
  </form></div>
  )
}
