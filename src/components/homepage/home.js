import React from 'react';

import HomeMob from './homeMob'
import HomeDesk from './homeDesk'

const Home = ({ isMobile}) => {

	return (
		<>
			{isMobile ? 
				<HomeMob /> 
				:
				<HomeDesk />	
			}
		</>
	);
}
 
export default Home;