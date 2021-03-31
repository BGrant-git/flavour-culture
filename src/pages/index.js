import React from "react"
import styled from "styled-components"
import "./css/index.css"

import SEO from "../components/seo"

import logoImg from "../images/icon.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.img`
  height: 300px;
  margin: 20px;
`

const ComingSoon = () => {
  return (
    <Container>
      <SEO />
      <Logo src={logoImg} alt="" />
      <h2>Flavourculture.co.uk coming soon!</h2>
    </Container>
  )
}

export default ComingSoon
