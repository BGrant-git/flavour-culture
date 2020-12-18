import React from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import Grid from '@material-ui/core/Grid'

import HomeMobile from './homeMobile'
import HomeDesktop from './homeDesktop'

const Home = () => {
	const breakpoints = useBreakpoint()

	return (
		<Grid container>
			<Grid item xs={12}>
				{breakpoints.sm ? 
					<HomeMobile /> 
					:
					<HomeDesktop />	
				}
			</Grid>
		</Grid>
	)
}
 
export default Home