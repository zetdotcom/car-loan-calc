import React, { useState } from 'react';
import FormAndSummaryContainer from 'containers/FormAndSummaryContainer';
import CarsListContainer from 'containers/CarsListContainer';
import Header from 'components/Header';
import { GlobalStyle } from './style';
import styled from 'styled-components';

const AppWrapper = styled.div`
	height: 100vh;
	overflow: auto;
`;

function App() {
	const [monthly, setMonthly] = useState('');

	return (
		<AppWrapper>
			<GlobalStyle />
			<Header />
			<FormAndSummaryContainer setMonthly={setMonthly} />
			<CarsListContainer monthly={monthly} />
		</AppWrapper>
	);
}

export default App;
