import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: 20px;
  background-color: #f0ead6;
  border-radius: 25px 25px 0 0;

  @media (max-width: 960px) {
    margin-left: 0;
  }
`

const Header = styled.div`
  background-color: #1d1d1b;
  width: 100%;
  color: white;
  text-align: center;
  padding: 5px;
  font-size: 22px;
  font-family: "thunder";
  border-radius: 25px 25px 0 0;
`

const VendorInfo = () => {
  return (
    <Container>
      <Header>
        <h1>HOSTING AN EVENT?</h1>
      </Header>
    </Container>
  )
}

export default VendorInfo
