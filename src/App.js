import React, { useEffect, useState } from 'react';
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
	const [carPrice, setCarPrice] = useState('');

	return (
		<AppWrapper>
			<GlobalStyle />
			<Header />
			<FormAndSummaryContainer setMonthly={setMonthly} setCarPrice={setCarPrice} />
			<CarsListContainer monthly={monthly} carPrice={carPrice} />
		</AppWrapper>
	);
}

export default App;
