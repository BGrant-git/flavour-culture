import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Grid from './gridComponent'

const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: black;
	height: 60px;
	color: white;
	width: 100%;
	font-size: 15px;
`

// const ColumnWrapper = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: flex-start;
// 	align-items: center;
// 	margin-bottom: 5px;
// `

const BottomColumnWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const Footer = () => {
	return (
		<FooterContainer>
			{/* <Grid columns={3} style={{width:'100%'}}>
				<ColumnWrapper>
					<div>list one</div>				
				</ColumnWrapper>
				<ColumnWrapper>
					<div>list two</div>				
				</ColumnWrapper>
				<ColumnWrapper>
					<div>list three</div>					
				</ColumnWrapper>				
			</Grid> */}
			<Grid columns={1}>
				<BottomColumnWrapper>
				<FontAwesomeIcon icon={["fab", "github"]} />
				</BottomColumnWrapper>			
				<BottomColumnWrapper>
				  © 2020 Flavour Culture | made by ben g 2020 | privacy policy           
				</BottomColumnWrapper>		
			</Grid>
		</FooterContainer>
	)
}
 
export default Footer;