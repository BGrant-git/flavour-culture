import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

const Image = styled.img`
  padding-left: 3vw;
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
    <Grid container style={{ padding: "20px 0" }}>
      <Grid item xs={4}>
        <Image src={props.img} />
      </Grid>
      <Grid container item xs={8}>
        <Grid style={{ fontSize: 100 }} item>
          <Text>"{props.text}"</Text>
        </Grid>
        <Grid item>
          <Author>- {props.author}</Author>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TestimonialComponent
