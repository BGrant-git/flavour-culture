import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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

const Button = styled.button`
  font-size: 22px;
  padding: 12px;
  margin: auto;
  background-color: var(--main-color);
  font-family: "Thunder";
  color: white;
  border-radius: 6px;
  :hover {
    color: var(--main-color);
    background-color: white;
  }
`

const VendorInfo = () => {
  return (
    <Container>
      <DinnerIcon src={dinnerIcon} alt="" />
      <Header>
        <h1>HOSTING AN EVENT?</h1>
      </Header>
      <TextContainer>
        <p>
          <strong>Flavour Culture Catering</strong> lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Nostrum sunt omnis quo, unde ut
          inventore. <br />
          Dolorem non corporis voluptatibus ex exercitationem voluptatum soluta
          doloribus, quaerat pariatur, fugiat doloremque nulla dignissimos.
        </p>
      </TextContainer>
      <Link to="/contact">
        <Button>MAKE A BOOKING</Button>
      </Link>
    </Container>
  )
}

export default VendorInfo
