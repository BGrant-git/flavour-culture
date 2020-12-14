import React from 'react';

import HomeMobile from './homeMobile'
import HomeDesktop from './homeDesktop'

const Home = ({ isMobile }) => {

	return (
		<>
			{isMobile ? 
				<HomeMobile /> 
				:
				<HomeDesktop />	
			}
		</>
	);
}
 
export default Home;