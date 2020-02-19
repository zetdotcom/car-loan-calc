import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LoanSummary from 'components/LoanSummary';
import Context from 'context';

export default function LoanSummaryContainer(props) {
	const data = useContext(Context);

	return <LoanSummary monthly={data.monthly} loanTotal={data.loanTotal} />;
}

LoanSummaryContainer.propTypes = {};
