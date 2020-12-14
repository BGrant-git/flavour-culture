import React from 'react'
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

const ContactContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	height: 800px;
	position: absolute;
	max-width: 100vw;
	overflow: hidden;
`

const ContactImg = styled.img`
	max-width: 100vw;
	position: relative;
`

const ContactOverlay = styled.div`
	position: absolute;
	padding: 25% 0 0 15%;
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
	align-items: flex-start;
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

const contactDesktop = ({ handleSubmit }) => {
	return (
		<Grid columns={1}>
			<ColumnWrapper>
				<ContactContainer>
					<ContactImg src='https://www.foodiesfeed.com/wp-content/uploads/2019/05/red-fruit-and-vegetables-on-a-white-background-3.jpg' alt='' />
					<ContactOverlay>						
						<ContactForm 
							method="post" 
							netlify-honeypot="bot-field" 
							data-netlify="true" 
							name="contact"
						>								
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
					</ContactOverlay>
				</ContactContainer>
			</ColumnWrapper>
		</Grid>
	)
}

export default contactDesktop