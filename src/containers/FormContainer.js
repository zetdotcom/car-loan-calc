import React, { useState, useEffect, useContext } from 'react';
import LoanForm from 'components/LoanForm';
import Context from 'context';
import PropTypes from 'prop-types';

export default function FormContainer() {
	const [price, setPrice] = useState('');
	const [deposit, setDeposit] = useState('');
	const [date, setDate] = useState(new Date());
	const [loanTerm, setLoanTerm] = useState(2);
	const [depositError, setDepositError] = useState(false);
	const [dateError, setDateError] = useState(false);

	const { setMonthly, setLoanTotal } = useContext(Context);

	useEffect(() => {
		setDepositError(deposit !== '' && deposit < price * 0.15);
	}, [deposit, price]);

	useEffect(() => {
		setDateError(date.getTime() < new Date().getTime() - 60 * 60 * 24);
	}, [date]);

	function onSubmit(e) {
		e.preventDefault();
		if (!dateError && !depositError) {
			console.log('submit');
			const monthly = (price - deposit) / 12;
			const loanTotal = price - deposit + 88 + 20;
			setLoanTotal(loanTotal);
			setMonthly(monthly);
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
