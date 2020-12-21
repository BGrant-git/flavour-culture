import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import biopic1 from "../../images/about/bio-pic1.jpg"
import biopic2 from "../../images/about/bio-pic2.jpg"

const BioImg = styled.img`
  width: 100%;
  display: flex;
  align-items: center;
`

const TextContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  padding-bottom: 20px;
`

const BioText = styled.p`
  padding: 20px;
`

const BioCards = () => {
  return (
    <Grid container style={{ margin: "70px 0", padding: "20px 0" }}>
      <Grid item xs={12}>
        <Title style={{ padding: 0 }}>MEET THE LADS</Title>
      </Grid>
      <Grid item xs={false} sm={1}></Grid>
      <Grid
        item
        container
        xs={12}
        md={10}
        alignItems="center"
        style={{ border: "1px solid black", marginBottom: 10 }}
      >
        <Grid item xs={12}>
          <Title>Daniel</Title>
        </Grid>
        <Grid item xs={12} md={4}>
          <BioImg src={biopic1} alt="" />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextContainer>
            <BioText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              est hic aliquid, nihil voluptatem, voluptates fugit in eligendi
              tempora sapiente perspiciatis debitis a repellendus aspernatur
              vero? <br />
              Officia est hic aliquid, nihil voluptatem, voluptates fugit in
              eligendi tempora sapiente perspiciatis debitis a repellendus
              aspernatur vero? Pariatur, fugit nostrum. Eum! Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Officia vero? Pariatur,
              fugit nostrum. Eum! <br />
              Officia est hic aliquid, nihil voluptatem, voluptates fugit in
              eligendi tempora sapiente perspiciatis debitis a repellendus
              aspernatur vero? Pariatur, fugit nostrum. Pariatur, fugit nostrum.
              Eum! Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </BioText>
          </TextContainer>
        </Grid>
      </Grid>
      <Grid item xs={false} sm={1} />
      <Grid item xs={false} sm={1}></Grid>
      <Grid
        item
        container
        xs={12}
        md={10}
        alignItems="center"
        style={{ border: "1px solid black" }}
      >
        <Grid item xs={12}>
          <Title>Johhny</Title>
        </Grid>
        <Grid item xs={12} md={4}>
          <BioImg src={biopic2} alt="" />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextContainer>
            <BioText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              est hic aliquid, nihil voluptatem, voluptates fugit in eligendi
              tempora sapiente perspiciatis debitis a repellendus aspernatur
              vero? <br />
              Pariatur, fugit nostrum. Eum! Officia est hic aliquid, nihil
              voluptatem, voluptates fugit in eligendi tempora sapiente
              perspiciatis debitis a repellendus aspernatur vero?
              <br />
              Officia est hic aliquid, nihil voluptatem, voluptates fugit in
              eligendi tempora sapiente perspiciatis debitis a repellendus
              aspernatur vero? Pariatur, fugit nostrum. Eum! Officia est hic
              aliquid, nihil voluptatem, voluptates fugit in eligendi tempora
              sapiente perspiciatis debitis a repellendus aspernatur vero?
              Pariatur, fugit nostrum. Eum!
            </BioText>
          </TextContainer>
        </Grid>
      </Grid>
      <Grid item xs={false} sm={1} />
    </Grid>
  )
}

export default BioCards
