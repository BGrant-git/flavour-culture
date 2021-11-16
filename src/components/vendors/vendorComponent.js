import React from "react"
import { useMediaQuery } from "@material-ui/core"
import styled from "styled-components"

import VendorComponentRight from "./VendorComponentRight"
import VendorComponentLeft from "./VendorComponentLeft"

import { vendorCopy, vendorInfo } from "../../text-files/vendorsText"
import brat from "../../../content/gallery/Brathaus/001.jpg"
import fcc from "../../images/vendors/indian.jpg"
import naan from "../../images/vendors/storyplate.jpg"
import divider from "../../images/henna/divider.png"

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

const CopyWrapper = styled.div`
  text-align: center;
  width: 500px;
  margin: auto;
  font-size: 20px;

  @media (max-width: 960px) {
    width: 90%;
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
      <CopyWrapper>
        <p>{vendorCopy}</p>
      </CopyWrapper>
      <div id="BRATHAUS">
        <VendorComponentRight
          heading={vendorInfo[0].name}
          subheading={vendorInfo[0].subheading}
          text={vendorInfo[0].text}
          img={brat}
          insta={vendorInfo[0].insta}
        />
      </div>
      <Divider
        src={divider}
        alt=""
        style={!matches ? { marginTop: "-60px" } : null}
      />
      {matches ? (
        <div id="NaanStop">
          <VendorComponentRight
            heading={vendorInfo[1].name}
            subheading={vendorInfo[1].subheading}
            text={vendorInfo[1].text}
            img={naan}
            insta={vendorInfo[2].insta}
          />
        </div>
      ) : (
        <div id="NaanStop">
          <VendorComponentLeft
            heading={vendorInfo[1].name}
            subheading={vendorInfo[1].subheading}
            text={vendorInfo[1].text}
            img={naan}
          />
        </div>
      )}
      <Divider src={divider} alt="" />
      <div id="Flavour-Culture-Catering">
        <VendorComponentRight
          heading={vendorInfo[2].name}
          subheading={vendorInfo[2].subheading}
          text={vendorInfo[2].text}
          img={fcc}
          insta={vendorInfo[2].insta}
        />
      </div>
    </>
  )
}

export default VendorComponent
