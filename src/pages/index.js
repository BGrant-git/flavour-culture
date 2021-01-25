import React, { useEffect } from "react"
import { navigate } from "gatsby"
import "./css/index.css"

import Layout from "../components/layout"
import Home from "../components/homepage/home"

const Index = () => {
  useEffect(() => {
    navigate("/coming-soon")
  }, [])

  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default Index
