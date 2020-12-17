import React from 'react'
import styled from 'styled-components'

import Grid from '../gridComponent'

import backgroundImg from '../../images/food-images/white-plate.jpg'

const ColumnWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 5px;
	width: 100%;
`

const ContactImg = styled.img`
	width: 40%;
`

const ContactForm = styled.form`
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
		<Grid columns={1}>
			<ColumnWrapper>					
				<ContactForm 
					method="post" 
					netlify-honeypot="bot-field" 
					data-netlify="true" 
					name="contact">	
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
				<ContactImg src={backgroundImg} alt='' />
			</ColumnWrapper>
		</Grid>
	)
}

export default contactDesktop