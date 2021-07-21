import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Layout from "../../components/layout"

import mandala from "../../images/henna/mandala2.png"

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => props.height}px;
`

const StyledImg = styled.img`
  width: 400px;
  height: 400px;

  @media (max-width: 1000px) {
    width: 250px;
    height: 250px;
  }
`

const TextWrapper = styled.div`
  margin: 0 auto 10px;
  max-width: 300px;
  text-align: center;
`

const getHeight = () =>
  typeof window !== "undefined" ? window.innerHeight - 155 : null

const Shop = () => {
  const [windowHeight, setWindowHeight] = useState(getHeight())

  useEffect(() => {
    let timeoutId = null
    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWindowHeight(getHeight()), 150)
    }

    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [])

  return (
    <Layout>
      <ContentWrapper height={windowHeight}>
        <TextWrapper>
          <h1>Flavour Culture Shop coming soon!</h1>
        </TextWrapper>
        <StyledImg src={mandala} alt="" />
      </ContentWrapper>
    </Layout>
  )
}

export default Shop
