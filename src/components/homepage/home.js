import React from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import HomeMobile from './homeMobile'
import HomeDesktop from './homeDesktop'

const Home = () => {

	const breakpoints = useBreakpoint()

	return (
		<>
			{breakpoints.sm ? 
				<HomeMobile /> 
				:
				<HomeDesktop />	
			}
		</>
	);
}
 
export default Home;