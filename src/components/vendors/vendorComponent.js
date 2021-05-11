import React from "react"
import { useMediaQuery } from "@material-ui/core"
import styled from "styled-components"

import VendorComponentRight from "./VendorComponentRight"
import ResponsiveVendor from "./ResponsiveVendor"

import { vendorText } from "src/flavour-culture-text/vendor-text"
import brat from "../../../content/gallery/Brathaus/001.jpg"
import fcc from "src/images/vendors/indian.jpg"
import naan from "src/images/vendors/storyplate.jpg"
import divider from "src/images/henna/divider.png"

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  padding: 30px;
  text-align: center;
  font-size: 50px;
  font-family: "Thunder";
`

const TitleRule = styled.div`
  height: 5px;
  background: black;
  width: 20%;
  border-radius: 4px;
`

const Divider = styled.img`
  display: block;
  margin: auto;

  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
  }
`

const VendorComponent = () => {
  const matches = useMediaQuery("(max-width: 960px)")

  return (
    <>
      <TitleContainer>
        <TitleRule />
        <Title>VENDORS</Title>
        <TitleRule />
      </TitleContainer>
      <div id="BRATHAUS">
        <VendorComponentRight
          heading={vendorText[0].name}
          subheading={vendorText[0].subheading}
          text={vendorText[0].text}
          img={brat}
        />
      </div>
      <Divider
        src={divider}
        alt=""
        style={!matches ? { marginTop: "-60px" } : null}
      />
      <div id="NaanStop">
        <ResponsiveVendor
          matches={matches}
          heading={vendorText[1].name}
          subheading={vendorText[1].subheading}
          text={vendorText[1].text}
          img={naan}
        />
      </div>
      <Divider src={divider} alt="" />
      <div id="Flavour-Culture-Catering">
        <VendorComponentRight
          heading={vendorText[2].name}
          subheading={vendorText[2].subheading}
          text={vendorText[2].text}
          img={fcc}
        />
      </div>
    </>
  )
}

export default VendorComponent
