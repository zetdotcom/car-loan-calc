import React from 'react';
import PropTypes from 'prop-types';
import SmallHeading from './ui/SmallHeading';

export default function LoanSummary(props) {
	const { monthly, loanTotal, loanTermMonths } = props;

	return (
		<div>
			<SmallHeading>Loan summary</SmallHeading>
			<div>monthly payment: {monthly}</div>
			<div>Total loan amount: {loanTotal}</div>
			<div>duration: {loanTermMonths}</div>
		</div>
	);
}

LoanSummary.propTypes = {};
