import React from 'react';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import styled from 'styled-components';
import awaitingImage from '../images/awaiting-image.jpg';

const GridListWrapper = styled.div`
	overflow: 'hidden';
	margin: 15px;
`;

const GridListStyled = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	grid-gap: 10px;
	grid-auto-rows: minmax(150px, auto);
	padding: 0;
`;

const GridListTile = styled.li`
	position: relative;
	list-style: none;
`;

const GridListTileBar = styled.a`
	left: 0;
	right: 0;
	bottom: 0;
	height: 60px;
	display: flex;
	flex-direction: column;
	color: white;
	position: absolute;
	background: rgba(0, 0, 0, 0.5);
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: background 0.4s;
	&:hover {
		background: rgba(0, 0, 0, 0.8);
	}
`;

const GridTileImage = styled.img`
	position: relative;
	height: 100%;
	width: 100%;
`;

const GridListTielBarTitle = styled.div`
	font-size: 0.8em;
	font-weight: 500;
`;

const GridListTielBarSubtitle = styled.div`
	font-size: 0.75em;
`;

export default function CarsList({ cars, loading }) {
	return (
		// <div>
		// 	Cars:{' '}
		// 	{loading ? (
		// 		<div>LOADING...</div>
		// 	) : (
		// 		<ul>
		// 			{cars.map(car => {
		// 				return (
		// 					<li>
		// 						{car.title.name} | {car.title.variant}
		// 						<img src={car.thumbnails[0]} />
		// 					</li>
		// 				);
		// 			})}
		// 		</ul>
		// 	)}
		// </div>
		<GridListWrapper>
			{loading ? (
				<div>LOADING...</div>
			) : (
				<GridListStyled cellHeight={180}>
					{cars.map(car => (
						<GridListTile key={car.stockReference}>
							<GridTileImage src={car.imageCount ? car.thumbnails[0] : awaitingImage} alt={car.title.name} />
							<GridListTileBar href={`https://www.arnoldclark.com${car.url}`} target='blank'>
								<GridListTielBarTitle>{car.title.name}</GridListTielBarTitle>
								<GridListTielBarSubtitle>{car.title.variant}</GridListTielBarSubtitle>
								{/* actionIcon={
								<IconButton style={{ color: 'white' }} aria-label={`info about ${car.title.name}`}>
									<InfoIcon />
								</IconButton>
							} */}
							</GridListTileBar>
						</GridListTile>
					))}
				</GridListStyled>
			)}
		</GridListWrapper>
	);
}
