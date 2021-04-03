import React from "react"
import styled from "styled-components"

import googleIcon from "../../images/contact/google.png"
import facebookIcon from "../../images/contact/facebook.png"
import instaIcon from "../../images/contact/instagram.svg"
import mailIcon from "../../images/contact/mail.png"

const Container = styled.div`
  padding: 20px 0;
`

const Title = styled.h1`
  text-align: center;
  margin: 0 0 10px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  max-width: 450px;
  border-radius: 33px;
  margin: 5px auto;
`

const IconStyle = styled.img`
  height: 57px;
  border: 3px solid white;
  border-radius: 33px;
  margin-left: 4px;
`

const Name = styled.h3`
  padding-left: 10px;
  font-size: 22px;
  color: white;
`

const ItemComponent = ({ image, text, backgroundColor, link }) => {
  return (
    <a href={link}>
      <Item style={{ backgroundColor: `${backgroundColor}` }}>
        <IconStyle src={image} alt="" />
        <Name>{text}</Name>
      </Item>
    </a>
  )
}

const ContactSocialComponent = () => {
  const socialData = [
    {
      image: `${googleIcon}`,
      text: "BRATHAUS by Flavour Culture",
      bg: `#548eec`,
      link: `https://g.page/brathaus-by-flavour-culture?share`,
    },
    {
      image: `${facebookIcon}`,
      text: "Flavour Culture",
      bg: `#45619d`,
      link: `https://www.facebook.com/FlavourCulture2020/`,
    },
    {
      image: `${instaIcon}`,
      text: "@flavour_culture",
      bg: `#b31e59`,
      link: `https://www.instagram.com/flavour_culture/?hl=en`,
    },
    {
      image: `${mailIcon}`,
      text: "EMAIL: info@flavourculture.co.uk",
      bg: "#267cb5",
    },
  ]

  return (
    <Container>
      <Title>More ways to get in touch</Title>
      {socialData.map((item, i) => (
        <ItemComponent
          image={item.image}
          text={item.text}
          backgroundColor={item.bg}
          link={item.link}
          key={i}
        />
      ))}
    </Container>
  )
}

export default ContactSocialComponent
