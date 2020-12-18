import React from 'react';
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'
import Grid from '@material-ui/core/Grid'

const HeroTextCard = styled.div`
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding: 60px;
`

const HeroImgCard = styled.div`	
	display: flex;
	min-width: 100%;
	max-height: 500px;
	overflow: hidden;
`

const ImageGalleryComponent = () => {
	const images = [
		{
			original: 'https://www.skipthedishes.com/img/home/hero/default/mobile-large.jpg',
			thumbnail: '',
		},
		{
			original: 'https://www.tasteofhome.com/wp-content/uploads/2019/08/vegetarian-samsa-or-samosasindian-special-traditional-street-food-punjabi-samosa-shutterstock_1189930276.jpg',
			thumbnail: '',
		},
		{
			original: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Melt-in-Your-Mouth-Chuck-Roast_EXPS_CWON16_41035_C06_29_3b.jpg',
			thumbnail: '',
		},
	];
	

	return (
		<ImageGallery 
			items={images} 
			showThumbnails={false}
			showFullscreenButton={false}
			autoPlay={true}
			showPlayButton={false}
			showNav={false}
		/>
	)
}

const HomeDesktop = () => {
	return (
		<Grid container>
				<Grid item xs={5}>			
					<HeroTextCard>
						<h3 >AWARD WINNING FOOD</h3>
						<h1>Lorem ipsum dolor sit, amet consectetur.</h1>
						<p>Dolore, consectetur? Culpa obcaecati velit magnam esse quod aspernatur, eos ut id sunt dicta.</p>
					</HeroTextCard>
					</Grid>
				<Grid item xs={7}>
					<HeroImgCard >
						<ImageGalleryComponent />
					</HeroImgCard>
					</Grid>
				<Grid item>
				</Grid>
		</Grid>
	);
}
 
export default HomeDesktop;
