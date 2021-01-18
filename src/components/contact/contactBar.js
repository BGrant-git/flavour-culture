import React, { useState } from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

const ContactForm = styled.form`
  width: 100%;
  margin: 30px 0;
  margin: 10px auto;

  color: white;
  font-family: inherit;
  max-width: 1300px;
`

const GridSection = styled(Grid)`
  background-color: #1d1d1b;
  padding: 20px 35px 35px;
`

const Title = styled.h1`
  font-size: 45px;
`

const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 5px;
  font-family: inherit;
  font-size: 18px;
`

const InputMessage = styled.textarea`
  height: 150px;
  width: 100%;
  padding: 5px;
  font-family: inherit;
  resize: none;
`

const Header = styled.p`
  padding: 5px 5px 5px 0;
`

const Submit = styled.button`
  margin: 5px 5px 5px 0;
  padding: 10px;
  font-family: inherit;
`

const ContactBar = () => {
  return (
    <ContactForm
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
          <Title>Contact Us</Title>
          <Header>Name:</Header>
          <Input type="text" name="name" required />
          <Header>Email Address:</Header>
          <Input type="email" name="email" required />
        </GridSection>
        <GridSection item xs={12} sm={5}>
          <Header style={{ marginTop: 18 }}>Message:</Header>
          <InputMessage name="message" required />
          <br />
          <Submit type="submit">SUBMIT</Submit>
        </GridSection>
        <Grid item xs={false} sm={1} />
      </Grid>
    </ContactForm>
  )
}

export default ContactBar
