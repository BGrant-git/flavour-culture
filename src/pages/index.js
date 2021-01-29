import React from "react"
import styled from "styled-components"

import "./css/index.css"

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
      <Logo src={require("../images/icon.png")} alt="" />
      <h2>Flavourculture.co.uk coming soon!</h2>
    </Container>
  )
}

export default ComingSoon
