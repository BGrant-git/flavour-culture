import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import Layout from '../components/layout'
import ContactMobile from '../components/contact/contactMobile'
import ContactDesktop from '../components/contact/contactDesktop'

const Contact = () => {

	const breakpoints = useBreakpoint()
	const isMobile = breakpoints.sm

	return ( 
		<Layout>
			{isMobile ? 
				<ContactMobile />
				:
				<ContactDesktop />
			}
		</Layout>
	)
}
 
export default Contact;