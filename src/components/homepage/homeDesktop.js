import React from 'react';
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'

import Grid from '../gridComponent'

const ColumnWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5px;
	width: 100%;
`

const HeroTextCard = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 500px;
	width: 45vw;
	padding: 0 1vw 0 3vw;
`

const HeroImgCard = styled.div`	
	width: 55vw;
	justify-content: flex-start;
	align=items: center;
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
				<ColumnWrapper>			
					<HeroTextCard>
						<h3>AWARD WINNING FOOD</h3>
						<h1>Lorem ipsum dolor sit, amet consectetur.</h1>
						<p>Dolore, consectetur? Culpa obcaecati velit magnam esse quod aspernatur, eos ut id sunt dicta.</p>
					</HeroTextCard>
				</ColumnWrapper>
				<ColumnWrapper>
					<HeroImgCard >
						<ImageGallery 
							items={images} 
							showThumbnails={false}
							showFullscreenButton={false}
							autoPlay={true}
							showPlayButton={false}
						/>
					</HeroImgCard>
				</ColumnWrapper>
				<ColumnWrapper>
					<div>2</div>
				</ColumnWrapper>
		</Grid>
	);
}
 
export default HomeDesktop;
