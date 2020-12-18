import React from 'react';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/layout'

import bannerImg from '../images/story-images/banner1.jpg'
import divider from '../images/divider.png'

const BannerContainer = styled.div`
	height: 200px;	
	overflow: hidden;
`

const Img = styled.img`
	width: 100vw;
`

const StoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 800px;
`

const MainTitle = styled.div`
	padding-top: 20px;
	font-size: 40px;
`

const StoryText = styled.p`
	width: 60vw;
	font-size: 20px;
	text-align: center;
`

const About = () => {

	return (
		<Layout>
			<Grid container>
				<Grid item xs={12}>
					<BannerContainer>
						<Img src={bannerImg} alt='' />
					</BannerContainer>					
				</Grid>
				<Grid item xs={12} >
					<StoryContainer>
						<MainTitle>OUR STORY</MainTitle>
						<img style={{width:200}} src={divider} alt='' />
						<StoryText>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis aperiam iure nisi aut, itaque esse consequatur sed dolore natus nihil nulla, quasi iusto, fugit cupiditate deserunt amet similique. Molestiae, praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</StoryText>
						<StoryText>
							Amet consectetur adipisicing elit. Nobis aperiam iure nisi aut, itaque esse consequatur sed dolore natus nihil nulla, quasi iusto, fugit cupiditate deserunt amet similique. Molestiae, praesentium.
						</StoryText>
					</StoryContainer>
				</Grid>
			</Grid>
		</Layout>
	);
}
 
export default About;