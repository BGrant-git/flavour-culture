import React from "react"
import styled from "styled-components"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"

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

const IconContainer = styled.div`
  display: inherit;
  flex-direction: row;
`

const Icon = styled.a`
  margin: 5px;
  color: white;
  transition: 0.1s ease-in;

  :hover {
    transform: translate(0, -5px);
    -webkit-transform: translate(0, -5px); /** Chrome & Safari **/
    -o-transform: translate(0, -5px); /** Opera **/
    -moz-transform: translate(0, -5px); /** Firefox **/
  }
`

const SocialComponent = () => (
  <SocialContanier>
    <SocialTitle>Check out our social media</SocialTitle>
    <IconContainer>
      <Icon href="">
        <FacebookIcon style={{ height: "50px", width: "50px" }} />
      </Icon>
      <Icon href="https://www.instagram.com/flavour_culture">
        <InstagramIcon style={{ height: "50px", width: "50px" }} />
      </Icon>
    </IconContainer>
  </SocialContanier>
)

export default SocialComponent
