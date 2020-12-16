import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import Grid from './gridComponent'

const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #202020;
	height: 70px;
	color: white;
	width: 100%;
	font-size: 15px;
`
const ColumnWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`

const Links = styled.a`
	text-decoratin: none;
	color: white;
`

const Footer = () => {
	return (
		<FooterContainer>
			<Grid columns={1}>
				<ColumnWrapper>
					<Links href='#'>
						<FacebookIcon fontSize='large' />
					</Links>
					<Links href='#'>
						<InstagramIcon fontSize='large' />
					</Links>
					<Links href='#'>
						<LinkedInIcon fontSize='large' />			
					</Links>	
				</ColumnWrapper>			
				<ColumnWrapper>
					<p>
				  	© 2020 Flavour Culture | site made by <a href='https://www.linkedin.com/in/ben-grant-397bbb1b6/'>Ben G</a> | <a href='#'>privacy policy</a>  
					</p>
				</ColumnWrapper>		
			</Grid>
		</FooterContainer>
	)
}
 
export default Footer;