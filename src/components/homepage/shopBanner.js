import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import ShopItems from "./ShopItems"

const Container = styled.div`
  margin-bottom: 40px;
  background-color: var(--eggshell);
  border-radius: 25px 25px 0 0;
  width: 101.8%;

  @media (max-width: 960px) {
    width: 100%;
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

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ShopBanner = () => {
  return (
    <Container>
      <Header>
        <h1>Flavour Culture Shop</h1>
      </Header>
      <ContentContainer>
        <h1>Our shop is coming soon</h1>
        <h3>
          Stay tuned for some bang bang curry sauce, biscuits, etc, and more
        </h3>
        <ShopItems />
      </ContentContainer>
    </Container>
  )
}

export default ShopBanner
