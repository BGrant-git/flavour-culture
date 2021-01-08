import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  @media (max-width: 960px) {
    justify-content: center;
  }
`

const StoryImage = styled.img`
  height: auto;
  min-width: 400px;
  overflow: hidden;

  @media (max-width: 960px) {
    width: 90%;
    height: auto;
  }
`

const Heading = styled.h1`
  padding-bottom: 20px;
`

const TextContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 20px;
  margin: auto;
  font-size: 16px;

  @media (max-width: 960px) {
    text-align: center;
    padding-top: 20px;
  }
`

const SocialContanier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

const SocialTitle = styled.h2`
  font-size: 19px;
`

const IcontContainer = styled.div`
  display: inherit;
  flex-direction: row;
`

const Icon = styled.a`
  margin: 5px;
  color: #1d1d1b;
  transition: 0.1s ease-in;

  :hover {
    transform: translate(0, -10px);
    -webkit-transform: translate(0, -10px); /** Chrome & Safari **/
    -o-transform: translate(0, -10px); /** Opera **/
    -moz-transform: translate(0, -10px); /** Firefox **/
  }
`

const SocialComponent = () => (
  <SocialContanier>
    <SocialTitle>Check out our social media</SocialTitle>
    <IcontContainer>
      <Icon href="">
        <FacebookIcon style={{ height: "50px", width: "50px" }} />
      </Icon>
      <Icon href="">
        <InstagramIcon style={{ height: "50px", width: "50px" }} />
      </Icon>
    </IcontContainer>
  </SocialContanier>
)

const StoryComponentLeft = props => {
  return (
    <Container>
      <Grid container>
        <Grid item sm={12} md={4}>
          <ImageContainer>
            <StoryImage src={props.img} alt="" />
          </ImageContainer>
        </Grid>
        <TextContainer item sm={12} md={8}>
          <Heading>{props.heading}</Heading>
          <p style={{ paddingBottom: 15 }}>{props.text1}</p>
          <p>{props.text2}</p>
          {props.hasSocial ? <SocialComponent /> : null}
        </TextContainer>
      </Grid>
    </Container>
  )
}

export default StoryComponentLeft
