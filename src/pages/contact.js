import React from "react"
import Footer from "../components/footer"
import { Link } from "gatsby"
import Header from '../components/header'
const Contact = () => {
  return (
    <div>
        <Footer/>
      <h1>Contact Me</h1>
      <p>Kumail Rawjani</p>
      <p>phone : "03172516561"</p>
      <Link to="/about">Want to know About me Click</Link>
      <Footer />
    </div>
  )
}

export default Contact
