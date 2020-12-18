import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import Layout from '../components/layout'
import ContactMobile from '../components/contact/contactMobile'
import ContactDesktop from '../components/contact/contactDesktop'

const Contact = () => {

	const breakpoints = useBreakpoint()

	const handleSubmit = event => {

	}

	return ( 
		<Layout>
			{breakpoints.sm ? // is mobile?
				<ContactMobile handleSubmit={handleSubmit} />
				:
				<ContactDesktop handleSubmit={handleSubmit} />
			}
		</Layout>
	)
}
 
export default Contact;