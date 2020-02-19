import React, { useEffect } from 'react';
import FormContainer from 'containers/FormContainer';
import LoanSummaryContainer from 'containers/LoanSummaryContainer';
import CarsListContainer from 'containers/CarsListContainer';
import Header from 'components/Header';
import MainContainer from 'components/ui/MainContainer';
import { GlobalStyle } from './style';
import styled from 'styled-components';

const AppWrapper = styled.div`
	height: 100vh;
	overflow: auto;
`;

function App() {
	return (
		<AppWrapper>
			<GlobalStyle />
			<header>
				<Header />
			</header>
			<div>
				<MainContainer>
					<FormContainer />
					<LoanSummaryContainer />
				</MainContainer>
				<CarsListContainer />
			</div>
		</AppWrapper>
	);
}

export default App;
