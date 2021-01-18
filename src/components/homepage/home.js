import React from "react"
import Grid from "@material-ui/core/Grid"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import styled from "styled-components"

import GalleryComponentDesktop from "./galleryComponentDesktop"
import GalleryComponentMobile from "./galleryComponentMobile"
import TestimonialComponent from "./testimonialComponent"

import MyDude from "../../images/home/iconfinder_batman_hero_avatar_comics_4043232.png"

const GalleryContainer = styled.div`
  background-color: #1d1d1b;
`

const Home = () => {
  const breakpoints = useBreakpoint()

  const testimonials = [
    [`Barney Gee (Monastery Productions)`],
    [
      `Catering was so good everyone fell asleep after lunch. Gohilton know whats up`,
    ],
    [`John Foodman`],
    [
      `These guys make good food. Best sausage that's been in me mouth in all of 2020`,
    ],
    [`Taylor Swift`],
    [`Best curry outside of Hounslow mate was on the bog for a fornight`],
  ]

  return (
    <Grid container>
      <Grid item xs={12}>
        {breakpoints.sm ? (
          <GalleryComponentMobile />
        ) : (
          <GalleryContainer>
            <GalleryComponentDesktop />
          </GalleryContainer>
        )}
      </Grid>
      <Grid container item>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={5}>
          <TestimonialComponent
            img={MyDude}
            author={testimonials[0]}
            text={testimonials[1]}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TestimonialComponent
            img={MyDude}
            author={testimonials[2]}
            text={testimonials[3]}
          />
        </Grid>
        <Grid item xs={false} sm={1} />
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={5}>
          <TestimonialComponent
            img={MyDude}
            author={testimonials[4]}
            text={testimonials[5]}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TestimonialComponent
            img={MyDude}
            author={testimonials[0]}
            text={testimonials[1]}
          />
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
    </Grid>
  )
}

export default Home
