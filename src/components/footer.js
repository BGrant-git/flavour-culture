import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1b;
  height: 80px;
  color: white;
  width: 100%;
  font-size: 15px;
`

const Links = styled.a`
  color: white;

  &:hover {
    color: #dcdcdc;
    transition: 0.1s ease-in;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Links href="#">
            <FacebookIcon style={{ height: 35, width: 35 }} />
          </Links>
          <Links href="#">
            <InstagramIcon style={{ height: 35, width: 35 }} />
          </Links>
          <Links href="#">
            <LinkedInIcon style={{ height: 35, width: 35 }} />
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
                Ben G{" "}
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
