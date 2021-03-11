import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"

const Container = styled.div`
  text-align: center;
  height: 600px;
  padding-top: 30px;
`

const Shop = () => {
  return (
    <Layout>
      <Container>
        <h2>Shop coming soon!</h2>
      </Container>
    </Layout>
  )
}

export default Shop
