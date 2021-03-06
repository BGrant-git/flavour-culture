import React from "react"
import styled from "styled-components"
import { Grid, useMediaQuery } from "@material-ui/core/"

import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const googleIcon = require("../images/google-footer.png")

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);
  height: 80px;
  color: white;
  width: 100%;
  font-size: 15px;
`

const Links = styled.a`
  color: white;

  &:hover {
    transition: 0.1s ease-in;
  }
`

const GoogleIcon = styled.div`
  background-color: white;
  height: 27px;
  width: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin: -3px 0 0 3px;
`

const Footer = () => {
  const matches = useMediaQuery("(max-width: 960px)")
  return (
    <FooterContainer>
      <Grid container direction="column" alignItems="center">
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Links href="#">
            <FacebookIcon
              style={
                matches ? { height: 50, width: 50 } : { height: 35, width: 35 }
              }
            />
          </Links>
          <Links href="https://www.instagram.com/flavour_culture">
            <InstagramIcon
              style={
                matches ? { height: 50, width: 50 } : { height: 35, width: 35 }
              }
            />
          </Links>
          <Links href="#">
            <LinkedInIcon
              style={
                matches ? { height: 50, width: 50 } : { height: 35, width: 35 }
              }
            />
          </Links>
          <Links href="https://maps.app.goo.gl/zAfMGh18ESzfFq4NA">
            <GoogleIcon
              style={
                matches
                  ? { height: "39px", width: "35px" }
                  : { height: "27px", width: "27px" }
              }
            >
              <img
                src={googleIcon}
                alt=""
                style={{ height: "75%", width: "75%" }}
              />
            </GoogleIcon>
          </Links>
        </Grid>
        <Grid item>
          <div>
            © {new Date().getFullYear()} Flavour Culture | site made by
            <strong>
              <Links
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/ben-grant-397bbb1b6/"
              >
                {" "}
                Ben Ga{" "}
              </Links>
            </strong>{" "}
            |{" "}
            <Links href="https://www.termsfeed.com/live/2fcfa9e4-943c-42d5-949c-8cbcb57136da">
              {" "}
              privacy policy
            </Links>
          </div>
        </Grid>
      </Grid>
    </FooterContainer>
  )
}

export default Footer
