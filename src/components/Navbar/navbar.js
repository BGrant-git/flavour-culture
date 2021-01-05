import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import NavbarLinks from "./navbarlinks"

import Logo from "../../images/icon.png"

const Navigation = styled.nav`
  height: 7vh;
  display: flex;
  background-color: #1d1d1b;
  position: relative;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  margin-left: -20px;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: white;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  margin-left: 65vw;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: white;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  padding-left: 100px;

  @media (max-width: 768px) {
    padding-left: 10px;
  }
`

const LogoStyle = styled.img`
  height: 200px;
  margin-top: 140px;

  @media (max-width: 768px) {
    height: 80px;
    margin-top: 0;
  }
`

const Navbar = ({ menuLinks }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Title>
        <Link to="/">
          <LogoStyle src={Logo} alt="" />
        </Link>
      </Title>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks menuLinks={menuLinks} />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks menuLinks={menuLinks} />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
