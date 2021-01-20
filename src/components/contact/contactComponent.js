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
  padding: 30px;
  background-color: white;
`

const Title = styled.h1`
  padding-bottom: 20px;
  font-size: 45px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`

const Label = styled.p`
  padding: 5px 0px;
`

const Input = styled.input`
  border: 1px solid #1d1d1b;
  height: 30px;
  width: 100%;
  height: 30px;
  font-family: inherit;
  font-size: 18px;
  padding: 5px;
`

const InputMessage = styled.textarea`
  resize: none;
  border: 1px solid #1d1d1b;
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
        </GridSection>
        <GridSection item xs={12} sm={5}>
          <Label>Event Date</Label>
          <Input type="date" name="date" />
          <Label>Event Location:</Label>
          <Input type="text" name="location" />
          <Label>Number of Guests:</Label>
          <Input type="text" name="guest-number" />
          <Label>Message:</Label>
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
