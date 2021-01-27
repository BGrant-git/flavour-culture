import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

import Layout from "../components/layout"

const Container = styled.div`
  padding: 20px;
  text-align: center;
`

const Link = styled.p`
  padding: 10px;
  color: blue;
`

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <h1 style={{ padding: "10px" }}>Page not found</h1>
        <p style={{ padding: "10px" }}>
          The page you are looking for doesn't exist or has moved.
        </p>
        <Link
          onClick={() => {
            navigate("-1")
          }}
        >
          Go Back
        </Link>
      </Container>
    </Layout>
  )
}

export default NotFound
