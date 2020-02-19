import React, { useEffect, useState } from 'react';
import FormContainer from 'containers/FormContainer';
import LoanSummaryContainer from 'containers/LoanSummaryContainer';
import CarsListContainer from 'containers/CarsListContainer';
import Header from 'components/Header';
import MainContainer from 'components/ui/MainContainer';
import Context from './context';
import { GlobalStyle } from './style';
import styled from 'styled-components';

const AppWrapper = styled.div`
	height: 100vh;
	overflow: auto;
`;

function App() {
	const [monthly, setMonthly] = useState('');
	const [loanTotal, setLoanTotal] = useState('');

	return (
		<AppWrapper>
			<GlobalStyle />
			<header>
				<Header />
			</header>
			<div>
				<Context.Provider value={{ monthly, loanTotal, setMonthly, setLoanTotal }}>
					<MainContainer>
						<FormContainer />
						<LoanSummaryContainer />
					</MainContainer>
					<CarsListContainer />
				</Context.Provider>
			</div>
		</AppWrapper>
	);
}

export default App;
