import React, { createContext, useState } from "react"

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
  const [testContext, setTestContext] = useState("hi")

  return (
    <StoreContext.Provider
      value={{ tesContext: [testContext, setTestContext] }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
