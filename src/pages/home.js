import React from "react"
import "./css/index.css"

import Layout from "../components/layout"
import Home from "../components/homepage/home"
import SEO from "../components/seo"

const Index = () => {
  return (
    <Layout>
      <SEO />
      <Home />
    </Layout>
  )
}

export default Index
