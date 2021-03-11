import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

const Container = styled.div`
  width: 100%;
  text-align: center;
`

const Circle = styled.div`
  height: 175px;
  width: 175px;
  background-color: white;
  border-radius: 90px;
  margin: 25px auto 10px;
`

const Caption = styled.p`
  padding: 5px;
  background-color: white;
  width: 50%;
  margin: -5px auto 10px;
  font-size: 20px;
`

const ShopItems = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={6} md={3}>
          <Circle />
          <Caption>Item 1</Caption>
        </Grid>
        <Grid item xs={6} md={3}>
          <Circle />
          <Caption>Item 2</Caption>
        </Grid>
        <Grid item xs={6} md={3}>
          <Circle />
          <Caption>Item 3</Caption>
        </Grid>
        <Grid item xs={6} md={3}>
          <Circle />
          <Caption>...and more!</Caption>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ShopItems
