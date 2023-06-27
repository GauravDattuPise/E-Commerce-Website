import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <Layout title={"Page Not Found"}>
      <div style={{ display : "flex", justifyContent : "center", alignItems : "center", flexDirection : "column"}}>
        <span style={{fontSize : "90px",color:"red", fontFamily :"cursive",marginTop : "90px"}}>404</span>
        <h3 style={{marginTop : "10px"}}>Page Not Found</h3>
        <p>Oops! the page you are looking for does not exist. It might have been moved or deleted.</p>
        <Link to="/">
        <button style={{marginTop : "40px",fontSize : "20px", backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '8px', cursor: 'pointer' }}>Back To Home</button>
        </Link>
      </div>
    </Layout> 
  ) 
}

export default Pagenotfound