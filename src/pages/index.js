import React, { useState, createContext } from "react"
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import './index.css'

// import Header from '../components/header'
import Layout from '../components/layout'

const useStyles = makeStyles({
  root: {
  }
})

const Index = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>

      <Layout>
        
      </Layout>
      {/* <Header /> */}
      

    </div>
  )
  
}

export default Index
