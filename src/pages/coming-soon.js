import React from "react"
import styled from "styled-components"

import comingSoon from "../images/icon.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ComingSoon = () => {
  return (
    <Container>
      <img src={comingSoon} alt="" />
      <h2>Flavourculture.co.uk coming soon!</h2>
    </Container>
  )
}

export default ComingSoon
