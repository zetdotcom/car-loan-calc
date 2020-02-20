import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from 'styled-components';
import awaitingImage from '../images/awaiting-image.jpg';
import { Heading2 } from './ui/Headings';

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
		<GridListWrapper>
			<Heading2>Cars affordable based on monthly payment</Heading2>
			{!cars.length && !loading && <p>No results</p>}
			{loading ? (
				<LinearProgress />
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
