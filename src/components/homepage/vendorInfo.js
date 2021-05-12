import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useMediaQuery } from "@material-ui/core"

import dinnerIcon from "src/images/home/dinnericon.png"
import { vendorText } from "src/flavour-culture-text/homepage-text"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90.75%;
  margin-left: 20px;
  border-radius: 25px 25px 0 0;
  background-color: var(--eggshell);

  @media (max-width: 960px) {
    margin-left: 0;
    height: auto;
  }
`

const Header = styled.div`
  background-color: var(--main-color);
  width: 100%;
  color: white;
  text-align: center;
  padding: 5px;
  font-size: 22px;
  font-family: "thunder";
  border-radius: 25px 25px 0 0;
`

const DinnerIcon = styled.img`
  height: 70px;
  margin-top: -70px;
  padding: 3px 0;
`

const TextContainer = styled.div`
  padding: 20px;
  font-size: 24px;
  text-align: center;
`

const Button = styled.button`
  font-size: 22px;
  padding: 12px;
  margin: 0 auto 20px;
  background-color: var(--main-color);
  font-family: "Thunder";
  color: white;
  border-radius: 16px;
  :hover {
    color: var(--main-color);
    background-color: white;
  }
`

const responsiveTextPadding = matches => {
  if (matches) {
    return { padding: "10px 0" }
  } else {
    return { padding: "20px 0" }
  }
}

const VendorInfo = () => {
  const matches = useMediaQuery("(max-width:960px)")

  return (
    <Container>
      <DinnerIcon src={dinnerIcon} alt="" />
      <Header>
        <h1>HOSTING AN EVENT?</h1>
      </Header>
      <TextContainer>
        <h2 style={responsiveTextPadding(matches)}>{vendorText[0]}</h2>
        <h4 style={responsiveTextPadding(matches)}>{vendorText[1]}</h4>
        <p style={responsiveTextPadding(matches)}> {vendorText[2]}</p>
      </TextContainer>
      <Link to="/contact">
        <Button>MAKE A BOOKING</Button>
      </Link>
    </Container>
  )
}

export default VendorInfo
