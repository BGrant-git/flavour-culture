import React from "react"
import styled from "styled-components"

import divider from "../../images/divider.png"

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainTitle = styled.div`
  padding-top: 20px;
  font-size: 40px;
`

const StoryText = styled.p`
  width: 60vw;
  font-size: 20px;
  text-align: center;
`

const OurStory = () => {
  return (
    <StoryContainer>
      <MainTitle>OUR STORY</MainTitle>
      <img style={{ width: 200 }} src={divider} alt="" />
      <StoryText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis aperiam
        iure nisi aut, itaque esse consequatur sed dolore natus nihil nulla,
        quasi iusto, fugit cupiditate deserunt amet similique. Molestiae,
        praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </StoryText>
      <StoryText>
        Amet consectetur adipisicing elit. Nobis aperiam iure nisi aut, itaque
        esse consequatur sed dolore natus nihil nulla, quasi iusto, fugit
        cupiditate deserunt amet similique. Molestiae, praesentium.
      </StoryText>
    </StoryContainer>
  )
}

export default OurStory
