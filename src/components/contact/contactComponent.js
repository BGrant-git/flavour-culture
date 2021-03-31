import React, { useState } from "react"
import styled from "styled-components"
import { Grid, useMediaQuery } from "@material-ui/core/"

import backgroundMob from "../../images/contact/mob-bg.jpg"
import backgroundDesk from "../../images/contact/contact-desktop-bg.jpg"

const Container = styled.div`
  width: 100%;
  color: white;
  margin: 0 auto;
  padding: 150px 0 100px;
  background-image: url(${backgroundDesk});
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: left;

  @media (max-width: 1330px) {
    background-image: url(${backgroundMob});
    padding-top: 100px;
  }
`

const GridSection = styled(Grid)`
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.5);
`

const Title = styled.h1`
  padding-bottom: 20px;
  font-size: 45px;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 45px;
    text-align: center;
  }
`

const Label = styled.p`
  padding: 5px 0px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`

const Input = styled.input`
  border: 1px solid var(--main-color);
  height: 30px;
  width: 100%;
  height: 30px;
  font-family: inherit;
  font-size: 18px;
  padding: 5px;

  @media (max-width: 1000px) {
    height: 40px;
    font-size: 24px;
  }
`

const InputMessage = styled.textarea`
  resize: none;
  border: 1px solid var(--main-color);
  width: 100%;
  height: 150px;
  font-family: inherit;
  font-size: 18px;
  padding: 5px;
`

const Submit = styled.button`
  margin: 5px 5px 5px 0;
  padding: 10px;
  font-family: inherit;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`

const CheckboxItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 2px 0;

  @media (max-width: 600px) {
    padding: 5px 0;
  }
`

const CheckBox = styled.input`
  transform: scale(1.2);

  @media (max-width: 1000px) {
    transform: scale(1.7);
  }
`

const CheckboxLabel = styled.label`
  font-size: 20px;

  @media (max-width: 1000px) {
    font-size: 22px;
  }
`

const ContactComponent = () => {
  const [catering, setCatering] = useState(true)
  const [brat, setBrat] = useState(true)
  const [naan, setNaan] = useState(true)
  const matches = useMediaQuery("(max-width: 960px")

  return (
    <Container>
      <form
        action="https://getform.io/f/17128148-c85c-428d-8bdc-6c42ce4641ca"
        method="POST"
      >
        <input type="hidden" name="form-name" value="contact" />
        <Grid container>
          <Grid item xs={false} md={1} />
          <GridSection
            item
            xs={12}
            md={5}
            style={{
              borderRadius: matches ? "20px 20px 0 0" : "20px 0 0 20px",
            }}
          >
            <Title>Make a Booking</Title>
            <Label>
              *Name:
              <Input type="text" name="name" required />
            </Label>
            <Label>
              *Email:
              <Input type="email" name="email" required />
            </Label>
            <Label>
              Contact Number:
              <Input type="text" name="phone" />
            </Label>
            <h2 style={{ paddingTop: "5px" }}>Select Vendor:</h2>
            <CheckboxItemContainer>
              <CheckboxLabel>
                <CheckBox
                  type="checkbox"
                  id="flavour-culture-catering"
                  name="vendor"
                  value="flavour-culture-catering"
                  onClick={() => setCatering(!catering)}
                />{" "}
                Flavour Culture Catering
              </CheckboxLabel>
            </CheckboxItemContainer>
            <CheckboxItemContainer>
              <CheckboxLabel>
                <CheckBox
                  type="checkbox"
                  id="brathaus"
                  name="vendor"
                  value="brathaus"
                  onClick={() => setBrat(!brat)}
                />{" "}
                Brathaus
              </CheckboxLabel>
            </CheckboxItemContainer>
            <CheckboxItemContainer>
              <CheckboxLabel>
                <CheckBox
                  type="checkbox"
                  id="naan-stop"
                  name="vendor"
                  value="naan-stop"
                  onClick={() => setNaan(!naan)}
                />{" "}
                Naan Stop
              </CheckboxLabel>
            </CheckboxItemContainer>
            <h2>Select Style of Service</h2>
            <CheckboxItemContainer>
              <CheckboxLabel style={catering ? { color: "grey" } : null}>
                <CheckBox
                  type="checkbox"
                  id="pre-plated"
                  name="service"
                  value="pre-plated"
                  disabled={catering}
                />{" "}
                Pre-plated drop off
              </CheckboxLabel>
            </CheckboxItemContainer>
            <CheckboxItemContainer>
              <CheckboxLabel style={catering ? { color: "grey" } : null}>
                <CheckBox
                  type="checkbox"
                  id="banqueting"
                  name="service"
                  value="banqueting"
                  disabled={catering}
                />{" "}
                Banqueting
              </CheckboxLabel>
            </CheckboxItemContainer>
            <CheckboxItemContainer>
              <CheckboxLabel style={naan && brat ? { color: "grey" } : null}>
                <CheckBox
                  type="checkbox"
                  id="street-food"
                  name="service"
                  value="street-food"
                  disabled={true}
                  checked={naan && brat ? false : true}
                />{" "}
                Street food style
              </CheckboxLabel>
            </CheckboxItemContainer>
          </GridSection>
          <GridSection
            item
            xs={12}
            md={5}
            style={{
              borderRadius: matches ? "0 0 20px 20px" : "0 20px 20px 0",
            }}
          >
            <Label>
              Event Date
              <Input type="date" name="date" />
            </Label>
            <Label>
              Event Location:
              <Input type="text" name="location" />
            </Label>
            <Label>
              Number of Guests:
              <Input type="text" name="guest-number" />
            </Label>
            <Label>
              Dietary requirements:
              <Input type="text" name="diet" />
            </Label>
            <Label>
              Additonal Information:
              <InputMessage name="message" />
            </Label>
            <br />
            <Submit type="submit">SUBMIT</Submit>
          </GridSection>
          <Grid item xs={false} md={1} />
        </Grid>
      </form>
    </Container>
  )
}

export default ContactComponent
