import React from 'react';
import PropTypes from 'prop-types';
import SmallHeading from './ui/SmallHeading';

export default function LoanSummary(props) {
	const { monthly, loanTotal } = props;

	return (
		<>
			<SmallHeading>Loan summary</SmallHeading>
			<div>monthly payment: {monthly}</div>
			<div>Total loan amount: {loanTotal}</div>
		</>
	);
}

LoanSummary.propTypes = {};
