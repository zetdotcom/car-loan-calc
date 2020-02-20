import React from 'react';
import styled from 'styled-components';
import { dark, yellow } from 'style';
import { Heading1 } from './ui/Headings';

const HeaderStyled = styled.header`
	background-color: ${dark};
	height: 100px;
	color: white;
	display: flex;
	align-items: center;
	padding: 0 10%;
	border-bottom: 5px solid ${yellow};
	margin-bottom: 20px;
	letter-spacing: 2px;
	@media (max-width: 445px) {
		padding: 0 10px;
		letter-spacing: 1px;
		height: 70px;
		font-size: 0.8em;
	}
`;

const Header = () => {
	return (
		<HeaderStyled>
			<Heading1>Interest free car loan</Heading1>
		</HeaderStyled>
	);
};

export default Header;
