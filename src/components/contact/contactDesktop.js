import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import backgroundImg from '../../images/food-images/white-plate.jpg'

const Container = styled(Grid)`
	height: 600px;
`

const ContactImg = styled.img`
	height: 600px;
`

const ContactForm = styled.form`
	min-width: 300px;
`

const ContactTitle = styled.h1`
	font-size: 30px;
	padding-bottom: 5px;
`

const Input = styled.input`
	width: 100%;
	background-color: lightGrey;
	height: 30px;
	padding: 20px;
	margin-bottom: 10px;
`

const InputMessage = styled.textarea`
	width: 100%;
	background-color: #DCDCDC;
	height: 200px;
	padding: 20px;
	margin-bottom: 10px;
	resize: none;
`

const Submit = styled.button`
	padding: 15px;
	margin-top: 5px;
	background-color: #DCDCDC;
	cursor: pointer;

	:hover {
		background-color: darkGrey;
		transition: all .1s ease-in;
	}
`

const contactDesktop = () => {
	return (
		<Grid container direction='row'>
			<Grid item xs={false} sm={3} />
			<Container 
				item 
				container 
				xs={6}
				alignItems='center'
				justify='center'
			>					
				<Grid item sm={5}>
					<ContactForm 
						method="post" 
						netlify-honeypot="bot-field" 
						data-netlify="true" 
						name="contact"
					>	
						<input type="hidden" name="form-name" value="contact" />							
						<ContactTitle>
							Contact Us!
						</ContactTitle>
						<p>Name:</p>
						<Input type="text" name="name" />
						<p>Email Address:</p>
						<Input type="email" name="email" />
						<p>Message:</p>
						<InputMessage name="message" />
						<Submit type='submit'>SUBMIT</Submit>
					</ContactForm>
				</Grid>
				<Grid item sm={7}>
					<ContactImg src={backgroundImg} alt='' />
				</Grid>
			</Container>
			<Grid item xs={false} sm={3} />
		</Grid>
	)
}

export default contactDesktop