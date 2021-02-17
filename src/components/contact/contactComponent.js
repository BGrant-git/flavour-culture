import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

const Form = styled.form`
  width: 100%;
  margin: 130px auto 20px;
  max-width: 1300px;

  @media (max-width: 960px) {
    margin-top: 20px;
  }
`

const GridSection = styled(Grid)`
  padding: 0 30px;
  background-color: white;
`

const Title = styled.h1`
  padding-bottom: 20px;
  font-size: 45px;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 35px;
    text-align: center;
  }
`

const Label = styled.p`
  padding: 5px 0px;
`

const Input = styled.input`
  border: 1px solid var(--main-color);
  height: 30px;
  width: 100%;
  height: 30px;
  font-family: inherit;
  font-size: 18px;
  padding: 5px;
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
`

const CheckboxItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 2px 0;
`

const CheckBox = styled.input`
  transform: scale(1.2);
`

const CheckboxLabel = styled.label`
  padding-left: 10px;
`

const ContactComponent = () => {
  return (
    <Form
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact-box"
      action="/"
    >
      <input type="hidden" name="form-name" value="contact" />
      <Grid container>
        <Grid item xs={false} sm={1} />
        <GridSection item xs={12} sm={5}>
          <Title>Make a Booking</Title>
          <Label>*Name:</Label>
          <Input type="text" name="name" required />
          <Label>*Email:</Label>
          <Input type="email" name="email" required />
          <Label>*Phone Number:</Label>
          <Input type="tel" name="phone" required />
          <h2 style={{ paddingTop: "5px" }}>Select Vendor:</h2>
          <CheckboxItemContainer>
            <CheckBox type="checkbox" id="fcc" name="vendor" value="fcc" />
            <CheckboxLabel for="fcc">Flavour Culture Catering</CheckboxLabel>
          </CheckboxItemContainer>
          <CheckboxItemContainer>
            <CheckBox type="checkbox" id="brat" name="vendor" value="brat" />
            <CheckboxLabel for="brat">Brathaus</CheckboxLabel>
          </CheckboxItemContainer>{" "}
          <CheckboxItemContainer>
            <CheckBox type="checkbox" id="naan" name="vendor" value="naan" />
            <CheckboxLabel for="naan">Naan Stop</CheckboxLabel>
          </CheckboxItemContainer>
          <h2>Select Style of Service</h2>
          <CheckboxItemContainer>
            <CheckBox type="checkbox" id="plate" name="service" value="plate" />
            <CheckboxLabel for="plate">Pre-plated drop off</CheckboxLabel>
          </CheckboxItemContainer>
          <CheckboxItemContainer>
            <CheckBox
              type="checkbox"
              id="street"
              name="service"
              value="street"
            />
            <CheckboxLabel for="street">
              Street style (marquee/van)
            </CheckboxLabel>
          </CheckboxItemContainer>{" "}
          <CheckboxItemContainer>
            <CheckBox
              type="checkbox"
              id="canteen"
              name="vendor"
              value="canteen"
            />
            <CheckboxLabel for="canteen">Banqueting </CheckboxLabel>
          </CheckboxItemContainer>
        </GridSection>
        <GridSection item xs={12} sm={5}>
          <Label>Event Date</Label>
          <Input type="date" name="date" />
          <Label>Event Location:</Label>
          <Input type="text" name="location" />
          <Label>Number of Guests:</Label>
          <Input type="text" name="guest-number" />
          <Label>Dietary requirements:</Label>
          <Input type="text" name="diet" />
          <Label>Additonal Information:</Label>
          <InputMessage name="message" />
          <br />
          <Submit type="submit">SUBMIT</Submit>
        </GridSection>
        <Grid item xs={false} sm={1} />
      </Grid>
    </Form>
  )
}

export default ContactComponent
