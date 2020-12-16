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

const contactMobile = ({ handleSubmit }) => {
	return (
		<Grid collums={1} style={{marginBottom:'795px'}}>
			<ColumnWrapper>
				<ContactContainer>
					<ContactImg src='https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' alt='' />
					<ContactOverlay>
						<Grid columns={2} style={{display:'flex',flexDirection:'column'}}>
							<ColumnWrapper>
								<Title>
									Contact us!
								</Title>
							</ColumnWrapper>
							<ColumnWrapper>
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
							</ColumnWrapper>
						</Grid>
					</ContactOverlay>
				</ContactContainer>
			</ColumnWrapper>
		</Grid>
	)
}
 
export default contactMobile