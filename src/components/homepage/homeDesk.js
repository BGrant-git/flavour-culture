import React from 'react';
import styled from 'styled-components'

import Grid from '../gridComponent'

const ColumnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5px
`
const HeroCard = styled.div`
	display: flex;
	justify-content: center;
	height: 500px;
	width: 50vw;
	padding: 10px;
	background-color: red;
	border: 1px solid black;
`

const HomeDesk = () => {
	return (
		<Grid columns={2} >
			<ColumnWrapper>
				<HeroCard>
					Hiiiiiiiiiiiiiiiiiii
				</HeroCard>
			</ColumnWrapper>
			<ColumnWrapper>
				<HeroCard>
					Hiiiiiiiiiiiiiiiiiiii
				</HeroCard>
			</ColumnWrapper>
		</Grid>
	);
}
 
export default HomeDesk;
