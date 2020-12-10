import React from "react"
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import './index.css'

import Layout from '../components/layout'
import Home from '../components/homepage/home'

const Index = () => {

  const breakpoints = useBreakpoint()
	const isMobile = breakpoints.sm

  return (
    <Layout>
      <Home isMobile={isMobile} />
    </Layout>
  )
  
}

export default Index
