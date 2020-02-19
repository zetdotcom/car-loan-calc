import React, { useState, useEffect, useContext } from 'react';
import LoanForm from 'components/LoanForm';
import Context from 'context';
import PropTypes from 'prop-types';
import * as common from 'constants/common';
import { ARR_FEE, MIN_DEPOSIT, ONE_DAY_IN_MS, COMP_FEE, MONTHS_IN_YR } from 'constants/common';

export default function FormContainer() {
	const [price, setPrice] = useState('');
	const [deposit, setDeposit] = useState('');
	const [date, setDate] = useState(new Date());
	const [loanTerm, setLoanTerm] = useState(2);
	const [depositError, setDepositError] = useState(false);
	const [dateError, setDateError] = useState(false);

	const { setMonthly, setLoanTotal, setLoanTermMonths } = useContext(Context);

	useEffect(() => {
		setDepositError(deposit !== '' && deposit < price * MIN_DEPOSIT);
	}, [deposit, price]);

	useEffect(() => {
		setDateError(date.getTime() < new Date().getTime() - ONE_DAY_IN_MS);
	}, [date]);

	function onSubmit(e) {
		e.preventDefault();
		if (!dateError && !depositError) {
			console.log('submit');
			const monthly = (price - deposit) / (loanTerm * MONTHS_IN_YR);
			const loanTotal = price - deposit + COMP_FEE + ARR_FEE;
			const loanTermMonths = loanTerm * MONTHS_IN_YR;
			setLoanTotal(loanTotal);
			setMonthly(monthly);
			setLoanTermMonths(loanTermMonths);
		}
	}

	return (
		<LoanForm
			onSubmit={onSubmit}
			price={price}
			handlePriceChange={e => setPrice(e.target.value)}
			deposit={deposit}
			handleDepositChange={e => setDeposit(e.target.value)}
			date={date}
			handleDateChange={d => setDate(d)}
			loanTerm={loanTerm}
			handleLoanTermChange={e => setLoanTerm(Number(e.target.value))}
			depositError={depositError}
			dateError={dateError}
		/>
	);
}

FormContainer.propTypes = {};
