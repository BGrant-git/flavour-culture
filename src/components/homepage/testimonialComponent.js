import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

const ContainerGrid = styled(Grid)`
  padding: 20px 0;
  background-color: white;
  height: 100%;
`

const Image = styled.img`
  padding: 0 3vw 0 5px;
  align-self: right;
`
const Text = styled.p`
  padding: 20px 10px 10px;
  font-size: 17px;
`

const Author = styled.p`
  padding: 10px 10px 20px;
  font-weight: bold;
  font-size: 18px;
`

const TestimonialComponent = props => {
  return (
    <ContainerGrid container>
      <Grid item xs={4}>
        <Image src={props.img} />
      </Grid>
      <Grid container item xs={8} style={{ backgroundColor: "white" }}>
        <Grid item>
          <Text>"{props.text}"</Text>
        </Grid>
        <Grid item>
          <Author>- {props.author}</Author>
        </Grid>
      </Grid>
    </ContainerGrid>
  )
}

export default TestimonialComponent
