import React from "react"

import StoreContextProvider from "./src/store/context"
import Layout from "./src/components/layout"

const wrapWithProvider = ({ element }) => {
  return (
    <StoreContextProvider>
      <Layout>{element}</Layout>
    </StoreContextProvider>
  )
}

export default wrapWithProvider
