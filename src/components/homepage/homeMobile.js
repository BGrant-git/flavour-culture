import React from 'react';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

const ImgContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const PlaceholdImg = styled.img`
	width: 100%;
`


const HomeMobile = () => {
	return (
			<Grid container>

				<Grid item xs={12}>				
					<ImgContainer>
						<PlaceholdImg src='https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' alt='' />
						
					</ImgContainer>						
				</Grid>
				
				<Grid item xs={12}>	2</Grid>
				<Grid item xs={12}>	3</Grid>
								
			</Grid>		
	)
}
 
export default HomeMobile;