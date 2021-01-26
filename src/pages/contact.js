import React from "react"

import Layout from "../components/layout"
import ContactComponent from "../components/contact/contactComponent"
import ContactBar from "../components/contact/contactBar"

const Contact = () => {
  return (
    <Layout>
      <ContactComponent />
      <ContactBar />
    </Layout>
  )
}

export default Contact
