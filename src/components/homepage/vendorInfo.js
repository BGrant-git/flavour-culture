import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import InstagramIcon from "@material-ui/icons/Instagram"

import { vendorInfo } from "../../text-files/homepageText"
import dinnerIcon from "../../images/home/dinnericon.png"

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
`

const ButtonWrapper = styled.div`
  display: flex;
`

const Button = styled.button`
  font-size: 22px;
  padding: 12px;
  margin: auto;
  background-color: var(--main-color);
  font-family: "Thunder";
  color: white;
  border-radius: 6px;
  transition: 0.1s ease-in;

  :hover {
    background-color: black;
  }
`

const InstaIconStyled = styled.div`
  margin: 0 5px;
  width: 53px;
  height: 53px;
  color: white;
  background-color: var(--main-color);
  border-radius: 6px;
  transition: 0.1s ease-in-out;

  :hover {
    background-color: black;
  }
`

const StyledP = styled.div`
  margin: 25px 0;
`

const VendorInfo = () => {
  return (
    <Container>
      <DinnerIcon src={dinnerIcon} alt="" />
      <Header>
        <h1>HOSTING AN EVENT?</h1>
      </Header>
      <TextContainer>
        {vendorInfo.map((item, i) => (
          <StyledP key={i}>{item}</StyledP>
        ))}
      </TextContainer>
      <ButtonWrapper>
        <Link to="/contact">
          <Button>MAKE A BOOKING</Button>
        </Link>
        <InstaIconStyled>
          <a href="https://www.instagram.com/flavour_culture">
            <InstagramIcon style={{ width: 53, height: 53 }} />
          </a>
        </InstaIconStyled>
      </ButtonWrapper>
    </Container>
  )
}

export default VendorInfo
