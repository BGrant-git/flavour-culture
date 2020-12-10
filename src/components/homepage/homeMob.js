import React from 'react';
import styled from 'styled-components'

import Grid from '../gridComponent'

const ColumnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5px;
	width: 100%;
`

const Row = styled.div`
	width: 100%;
	margin: 10px 0;
`

const ImgContainer = styled.div`
	display: box;
	display: flex;
	box-align: center;
	align-items: center;
	box-pack: center;
	justify-content: center;
`

const PlaceholdImg = styled.img`
	width: 100vw;
	position: relative;
`

const Overlay = styled.div`
	position: absolute;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: column;
	padding: 20px;
	color: white;
`

const OverlayTitle = styled.h2`
	padding: 10px;
	font-size: 35px;
`

const OverlayBtn = styled.button`	
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.5);
	padding: 10px;
	color: white;

	:hover {
		transition: all 0.1s ease-in;
		background-color: rgba(0, 0, 0, 0.7);
	}
`

const HomeMob = () => {
	return (
			<Grid columns={1}>
				<ColumnWrapper>
				
					<Row>
						<ImgContainer>
							<PlaceholdImg src='https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' alt='' />
							<Overlay>
								<OverlayTitle>LOREM IPSUM</OverlayTitle>
								<OverlayBtn>CLICK</ OverlayBtn>
							</Overlay>
						</ImgContainer>						
					</Row>

					<Row></Row>
					<Row></Row>
				</ColumnWrapper>
				
			</Grid>		
	);
}
 
export default HomeMob;