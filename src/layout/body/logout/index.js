import React from 'react'
import Header from '../../header'
import Navbar from '../../navbar'
import Footer from '../../footer'
import './style.css'

const Logout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="row">
        <div className="container">
          <button>Sign in with google</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Logout
