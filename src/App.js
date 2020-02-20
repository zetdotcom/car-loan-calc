import React, { useEffect, useState } from 'react';
import FormContainer from 'containers/FormContainer';
import LoanSummaryContainer from 'containers/LoanSummaryContainer';
import FormAndSummaryContainer from 'containers/FormAndSummaryContainer';
import CarsListContainer from 'containers/CarsListContainer';
import Header from 'components/Header';
import FlexContainer from 'components/ui/FlexContainer';
import Context from './context';
import { GlobalStyle } from './style';
import styled from 'styled-components';

const AppWrapper = styled.div`
	height: 100vh;
	overflow: auto;
`;

function App() {
	const [monthly, setMonthly] = useState('');
	const [carPrice, setCarPrice] = useState('');
	// const [loanTotal, setLoanTotal] = useState('');
	// const [loanTermMonths, setLoanTermMonths] = useState('');
	// const [deliveryDate, setDeliveryDate] = useState(new Date())

	return (
		<AppWrapper>
			<GlobalStyle />
			<Header />

			{/* <Context.Provider
					value={
						{
							// monthlyPayments,
							//  loanTotal, setMonthly, setLoanTotal, loanTermMonths, setLoanTermMonths
						}
					}
				> */}
			<FormAndSummaryContainer setMonthly={setMonthly} setCarPrice={setCarPrice} />
			{/* <FormContainer />
						<LoanSummaryContainer /> */}
			<CarsListContainer monthly={monthly} carPrice={carPrice} />
			{/* </Context.Provider> */}
		</AppWrapper>
	);
}

export default App;
