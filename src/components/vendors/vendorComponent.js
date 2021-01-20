import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const SectionContainer = styled.div`
  width: 95%;
  margin: 10px auto;

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

  @media (max-width: 960px) {
    width: 90%;
    height: auto;
  }
`

const SectionTextContainer = styled.div`
  padding: 20px;
`

const SectionHeading = styled.h1`
  padding-bottom: 10px;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const SectionSubheading = styled.h3`
  padding: 5px 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const SectionText = styled.p`
  padding: 5px 0;
  text-align: justify;
`

const VendorComponentRight = props => {
  const breakpoints = useBreakpoint()

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
    <SectionContainer style={{ backgroundColor: "#1d1d1b", color: "white" }}>
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
  const breakpoints = useBreakpoint()

  const img1 = require("../../../content/gallery/Brathaus/PXL_20201125_124046901.PORTRAIT~2.jpg")

  const sectionContainerStyleFluid = breakpoints.md
    ? { backgroundColor: "#1d1d1b", color: "white" }
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
          `We sell the largest bratwurst in town with a length of 30cm (12”), served in fresh baguette with the option of 'Bautzner' mustard, 'Heinz' ketchup & sauerkraut. We also offer a smaller portion.`,
        ],
        [
          `The bratwurst can also be enjoyed in classic German street food style as Currywurst. The sausage is sliced and topped with our homemade curry sauce then served with fries or a grilled baguette. For our vegan guests we offer a delicious vegan wurst which represents the traditional bratwurst without the meat. We also offer a seasonal sweet treat in the form of homemade hot apple strudel.`,
        ],
      ],
    },
    {
      name: "Naan Stop",
      subheading: "Fresh & vibrant naan wraps. As spicy as you like it.",
      text: [
        [
          `We have always loved Indian cuisine. Sometimes many dishes we love tend to be too oily which can leave you feeling tired, overly filled and not necessarily satisfied.`,
        ],
        [
          `At Naan Stop you can experience a healthy and nutritious meal that respects the comfort of Indian street food.`,
        ],
        [`START from scratch with our fresh handmade naan or chapati.`],
        [
          `NEXT choose from a juicy selection of marinated meats or seasonal vegetables, this can be made as spicy as you like it with our secret masala.`,
        ],
        [
          `THEN load it with refreshing salads, punchy pickles & sauces that we create & select to complement our flavours.`,
        ],
        [
          `Enjoy with crispy Kenyan masala chips, the sauce that always gets people talking, or handmade samosa & other quick street eats.`,
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
      <VendorComponentRight
        heading={vendorInfo[0].name}
        subheading={vendorInfo[0].subheading}
        text={vendorInfo[0].text}
        img={img1}
        background={sectionContainerStyle}
      />
      {breakpoints.md ? (
        <>
          <VendorComponentRight
            heading={vendorInfo[1].name}
            subheading={vendorInfo[1].subheading}
            text={vendorInfo[1].text}
            img={img1}
            background={sectionContainerStyleFluid}
          />
        </>
      ) : (
        <>
          <VendorComponentLeft
            heading={vendorInfo[1].name}
            subheading={vendorInfo[1].subheading}
            text={vendorInfo[1].text}
            img={img1}
          />
        </>
      )}

      <VendorComponentRight
        heading={vendorInfo[2].name}
        subheading={vendorInfo[2].subheading}
        text={vendorInfo[2].text}
        img={img1}
        background={sectionContainerStyle}
      />
    </>
  )
}

export default VendorComponent
