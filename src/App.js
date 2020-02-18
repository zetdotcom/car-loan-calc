import React, { useEffect } from 'react';
import FormContainer from 'containers/FormContainer';
import LoanSummaryContainer from 'containers/LoanSummaryContainer';
import CarsListContainer from 'containers/CarsListContainer';
import Header from 'components/Header';

function App() {
	return (
		<div>
			<header>
				<Header />
			</header>
			<div>
				<FormContainer />
				<LoanSummaryContainer />
				<CarsListContainer />
			</div>
		</div>
	);
}

export default App;
