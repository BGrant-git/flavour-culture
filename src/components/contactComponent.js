import React, { useState } from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { navigate } from "gatsby"

const ContactForm = styled.form`
  width: 100%;
  margin: 30px 0;
  display: flex;
  align-items: center;
  color: white;
  font-family: inherit;
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
`

const Header = styled.p`
  padding: 5px 5px 5px 0;
`

const Submit = styled.button`
  margin: 5px 5px 5px 0;
  padding: 10px;
`

// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactComponent = props => {
  const [name, setName] = useState("")

  const handleChange = e => {
    setName({ ...name, [e.target.name]: e.target.value })
  }

  const handleSubmit = event => {
    // Prevent the default onSubmit behavior
    event.preventDefault()
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...name,
      }),
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate("/"))
      // On error, show the error in an alert
      .catch(error => alert(error))
  }

  return (
    <ContactForm
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact-box"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <Grid container>
        <Grid item xs={false} sm={1} />
        <GridSection item xs={12} sm={5}>
          <Title>Contact Us</Title>
          <Header>Name:</Header>
          <Input type="text" name="name" onChange={handleChange} />
          <Header>Email Address:</Header>
          <Input type="email" name="email" />
        </GridSection>
        <GridSection item xs={12} sm={5}>
          <Header style={{ marginTop: 18 }}>Message:</Header>
          <InputMessage name="message" />
          <br />
          <Submit type="submit">SUBMIT</Submit>
        </GridSection>
        <Grid item xs={false} sm={1} />
      </Grid>
    </ContactForm>
  )
}

export default ContactComponent
