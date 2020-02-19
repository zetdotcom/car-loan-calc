import React, { useEffect, useState } from 'react';
import FormContainer from 'containers/FormContainer';
import LoanSummaryContainer from 'containers/LoanSummaryContainer';
import FormAndSummaryContainer from 'containers/FormAndSummaryContainer';
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
	// const [loanTotal, setLoanTotal] = useState('');
	// const [loanTermMonths, setLoanTermMonths] = useState('');
	// const [deliveryDate, setDeliveryDate] = useState(new Date())

	return (
		<AppWrapper>
			<GlobalStyle />
			<header>
				<Header />
			</header>
			<div>
				<Context.Provider
					value={
						{
							// monthlyPayments,
							//  loanTotal, setMonthly, setLoanTotal, loanTermMonths, setLoanTermMonths
						}
					}
				>
					<FormAndSummaryContainer setMonthly={setMonthly} />
					{/* <FormContainer />
						<LoanSummaryContainer /> */}
					<CarsListContainer monthly={monthly} />
				</Context.Provider>
			</div>
		</AppWrapper>
	);
}

export default App;
