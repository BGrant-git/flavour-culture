import React from "react"
import styled from "styled-components"
import "./css/index.css"

import SEO from "../components/seo"
import Home from "../components/homepage/home"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Index = () => {
  return (
    <Container>
      <SEO />
      <Home />
    </Container>
  )
}

export default Index
