import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import thinFood from '../../images/food-images/thin-food.jpg'

const ContactContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 800px;
	position: absolute;
	max-width: 100vw;
	overflow: hidden;
`

const ContactImg = styled.img`
	max-width: 100vw;
	position: relative;
	-webkit-filter: blur();
	filter: blur(2.5px);
	transform: scale(1.3)
`

const ContactOverlay = styled.div`
	position: absolute;	
	height: 600px;
	width: 450px;
	background-color: white;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`

const Title = styled.h1`
	font-size: 50px;
	padding: 20px;
`

const ContactForm = styled.form`

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
	resize: none;
`

const Submit = styled.button`
	padding: 15px;
	background-color: #DCDCDC;
	cursor: pointer;
`

const contactMobile = () => {
	return (
		<Grid container style={{marginBottom:'795px'}}>
			<Grid xs={12}>
				<ContactContainer>
					<ContactImg src={thinFood} alt='' />
					<ContactOverlay>
						<Grid container item xs={12}>
							<Grid item xs={12}>
								<Title>
									Contact us!
								</Title>
							</Grid>
							<Grid item xs={12}>
								<ContactForm
									method="post"
									netlify-honeypot="bot-field"
									data-netlify="true"
									name="contact">
									<input type="hidden" name="contact" value="contact" />
									<p>Name:</p>
									<Input type="text" name="name" />
									<p>Email Address:</p>
									<Input  type="email" name="email" />
									<p>Message:</p>
									<InputMessage name="message" />
									<Submit type='submit'>SUBMIT</Submit>
								</ContactForm>
							</Grid>
						</Grid>
					</ContactOverlay>
				</ContactContainer>
				</Grid>
		</Grid>
	)
}
 
export default contactMobile