import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const Contact = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <p>Kumail Rawjani</p>
      <p>phone : "03172516561"</p>
      <Link to="/about">Want to know About me Click</Link>
    </Layout>
  )
}

export default Contact
