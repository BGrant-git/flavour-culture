import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled.div`
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: white;
    height: 2px;
    transition: all 0.2s ease-in;
  }

  :hover {
    color: white;

    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const Links = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-family: "Thunder";

  @media (max-width: 768px) {
    color: black;
  }
`

const NavbarLinks = ({ menuLinks }) => {
  return (
    <>
      {menuLinks.map((item, i) => (
        <NavItem key={i}>
          <Links to={item.link}>{item.name}</Links>
        </NavItem>
      ))}
    </>
  )
}

export default NavbarLinks
