import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { useMediaQuery } from "@material-ui/core"

const SectionContainer = styled.div`
  width: 95%;
  margin: 10px auto;
  border-radius: 50px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const SectionImageContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const SectionImage = styled.img`
  height: auto;
  width: 400px;
  overflow: hidden;
  padding: 1vw;
  border-radius: 60px;

  @media (max-width: 960px) {
    width: 90%;
    height: auto;
  }
`

const SectionTextContainer = styled.div`
  padding: 20px;
`

const SectionHeading = styled.h1`
  font-size: 40px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const SectionSubheading = styled.h2`
  padding: 5px 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const SectionText = styled.p`
  padding: 10px 0;
  text-align: justify;
  font-size: 20px;
`

const VendorComponentRight = props => {
  return (
    <SectionContainer style={props.background}>
      <Grid container>
        <Grid item sm={12} md={8}>
          <SectionTextContainer>
            <SectionHeading>{props.heading}</SectionHeading>
            <SectionSubheading>{props.subheading}</SectionSubheading>
            {props.text.map((item, i) => (
              <SectionText index={i}>{item}</SectionText>
            ))}
          </SectionTextContainer>
        </Grid>
        <Grid item sm={12} md={4}>
          <SectionImageContainer>
            <SectionImage src={props.img} alt="" />
          </SectionImageContainer>
        </Grid>
      </Grid>
    </SectionContainer>
  )
}

const VendorComponentLeft = props => {
  return (
    <SectionContainer
      style={{ backgroundColor: " var(--main-color)", color: "white" }}
    >
      <Grid container>
        <Grid item sm={12} md={4}>
          <SectionImageContainer>
            <SectionImage src={props.img} alt="" />
          </SectionImageContainer>
        </Grid>
        <Grid item sm={12} md={8}>
          <SectionTextContainer>
            <SectionHeading>{props.heading}</SectionHeading>
            <SectionSubheading>{props.subheading}</SectionSubheading>
            {props.text.map((item, i) => (
              <SectionText index={i}>{item}</SectionText>
            ))}
          </SectionTextContainer>
        </Grid>
      </Grid>
    </SectionContainer>
  )
}

const VendorComponent = () => {
  const matches = useMediaQuery("(max-width: 960px)")

  const img1 = require("../../../content/gallery/Brathaus/PXL_20201125_124046901.PORTRAIT~2.jpg")

  const sectionContainerStyleFluid = matches
    ? { backgroundColor: " var(--main-color)", color: "white" }
    : { backgroundColor: "white" }

  const sectionContainerStyle = { backgroundColor: "white" }

  const vendorInfo = [
    {
      name: "BRATHAUS",
      subheading: "Authentic German Sausage.",
      text: [
        [
          `With our Brathaus concept we are bringing authentic German sausages to London over the Christmas period and beyond. We choose only the finest quality sausages that are grilled using a barrel style BBQ for the best flavour.`,
        ],
        [
          `We sell the largest bratwurst in town with a length of 30cm (12”), served in fresh baguette with the option of mustard, ketchup & sauerkraut. We also offer a smaller portion.`,
        ],
        [
          `The bratwurst can also be enjoyed in classic German street food style as Currywurst. The sausage is sliced and topped with our homemade curry sauce then served with a grilled baguette. For our vegan guests we offer a delicious vegan wurst which represents the traditional bratwurst without the meat.`,
        ],
      ],
    },
    {
      name: "Naan Stop",
      subheading: "Fresh & vibrant naan wraps. As spicy as you like it.",
      text: [
        [
          `We love indian food but often it can be very oily which could give you an upset stomach.
          At Naan Stop we want you to experience a healthy and nutritious meal that respects the comfort of Indian street food. START from scratch with our fresh handmade naan.`,
        ],
        [
          `At Naan Stop you can experience a healthy and nutritious meal that respects the comfort of Indian street food.`,
        ],
        [`START from scratch with our fresh handmade naan.`],
        [
          `NEXT choose from a juicy selection of marinated meats or seasonal vegetables, this can be made as spicy as you like it with our secret masala.`,
        ],
        [
          `THEN load it with refreshing salads, punchy pickles & sauces that we create & select to complement our flavours.`,
        ],
        [
          `FINALLY, choose from our crispy Kenyan masala chips (the sauce that always gets people talking), Samosas and special indian street snacks.`,
        ],
      ],
    },
    {
      name: "Flavour Culture Catering",
      subheading:
        "Got an event with hungry mouths to feed? We’ve got you covered.",
      text: [
        [
          `At Flavour Culture we believe if there’s one kind of story we all share, it’s one about food. It is an important way to bring people together, from family meals at home, food vendors at a music festival to a quick lunch break on a film set. It’s that feeling of something to look forward to & that connection of people around food that we bring with our catering services.`,
        ],
        [
          `Pick from one or more of our vendors to cater at your event, or book a drop off from our executive chefs. We understand the dynamic nature of events from extensive experience so we are flexible to fit your needs and achieve our ultimate goal of leaving you and your guests completely satisfied.`,
        ],
      ],
    },
  ]

  return (
    <>
      <div id="BRATHAUS">
        <VendorComponentRight
          heading={vendorInfo[0].name}
          subheading={vendorInfo[0].subheading}
          text={vendorInfo[0].text}
          img={img1}
          background={sectionContainerStyle}
        />
      </div>
      {matches ? (
        <div id="NaanStop">
          <VendorComponentRight
            heading={vendorInfo[1].name}
            subheading={vendorInfo[1].subheading}
            text={vendorInfo[1].text}
            img={img1}
            background={sectionContainerStyleFluid}
          />
        </div>
      ) : (
        <div id="NaanStop">
          <VendorComponentLeft
            heading={vendorInfo[1].name}
            subheading={vendorInfo[1].subheading}
            text={vendorInfo[1].text}
            img={img1}
          />
        </div>
      )}
      <div id="FCC">
        <VendorComponentRight
          heading={vendorInfo[2].name}
          subheading={vendorInfo[2].subheading}
          text={vendorInfo[2].text}
          img={img1}
          background={sectionContainerStyle}
        />
      </div>
    </>
  )
}

export default VendorComponent
