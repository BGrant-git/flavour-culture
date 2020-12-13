import React from 'react';
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'

import Grid from '../gridComponent'


const ColumnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`

const CardContainer = styled.div`
	display: flex;
	align-items: center;
`

const HeroTextCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 500px;
	width: 45vw;
`

const HeroImgCard = styled.div`	
	width: 55vw;
`

const HeroText = styled.div`
	padding: 0 15px 0 5vw;
`

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

const HomeDesktop = () => {
	return (
		<Grid columns={2} >
			<CardContainer>
				<ColumnWrapper>			
					<HeroTextCard>
						<HeroText>
							<h3>AWARD WINNING FOOD</h3>
							<h1 style={{fontSize:35,paddingBottom:15}}>Lorem ipsum dolor sit, amet consectetur.</h1>
							<p>Dolore, consectetur? Culpa obcaecati velit magnam esse quod aspernatur, eos ut id sunt dicta.</p>
						</HeroText>						
					</HeroTextCard>
				</ColumnWrapper>
				<ColumnWrapper>
					<HeroImgCard style={{justifyContent:'flex-start',alignItems:'center'}}>
						<ImageGallery 
							items={images} 
							showThumbnails={false}
							showFullscreenButton={false}
							autoPlay={true}
							showPlayButton={false}
						/>
					</HeroImgCard>
				</ColumnWrapper>
			</CardContainer>
		</Grid>
	);
}
 
export default HomeDesktop;
