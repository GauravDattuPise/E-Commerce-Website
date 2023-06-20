import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <Layout title={"Page Not Found"}>
      <div style={{ display : "flex", justifyContent : "center", alignItems : "center", flexDirection : "column"}}>
        <span style={{fontSize : "90px", fontFamily :"cursive"}}>404</span>
        <h1>Oop's Page Not Found</h1>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    </Layout>
  )
}

export default Pagenotfound