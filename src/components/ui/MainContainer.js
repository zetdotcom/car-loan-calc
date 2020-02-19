import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerStyled = styled.div`
	display: flex;
	/* flex-direction: ${props => (props.column ? 'column' : 'row')}; */
	margin: 0 15px;
	flex-flow: row wrap;
	justify-content: center;
	@media (max-width: 600px) {
		align-items: center;
		flex-flow: column;
	}
	@media (max-width: 430px) {
		margin: 0 10px;
	}
`;

export default function MainContainer({ children }) {
	return <ContainerStyled>{children}</ContainerStyled>;
}

MainContainer.propTypes = {};
