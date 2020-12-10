import React from 'react';
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

const Row = styled.div`
	background-color: red;
	width: 100%;
	margin: 10px 0;
`

const HomeMob = () => {
	return (
			<Grid columns={1}>
				<ColumnWrapper>
					<Row>
						<img src='https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' alt='' />
					</Row>

					<Row>Hi</Row>
					<Row>Hi</Row>
				</ColumnWrapper>
				
			</Grid>		
	);
}
 
export default HomeMob;