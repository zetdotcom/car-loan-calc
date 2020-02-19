import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LoanSummary from 'components/LoanSummary';
import Context from 'context';

export default function LoanSummaryContainer(props) {
	const data = useContext(Context);
	const { loanTotal, monthly, loanTermMonths } = data;

	return <LoanSummary monthly={monthly} loanTotal={loanTotal} loanTermMonths={loanTermMonths} />;
}

LoanSummaryContainer.propTypes = {};
