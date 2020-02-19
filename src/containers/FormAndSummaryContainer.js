import React, { useState, useEffect, useContext } from 'react';
import LoanForm from 'components/LoanForm';
import LoanSummary from 'components/LoanSummary';
import Context from 'context';
import PropTypes from 'prop-types';
import * as common from 'constants/common';
import { ARR_FEE, MIN_DEPOSIT, ONE_DAY_IN_MS, COMP_FEE, MONTHS_IN_YR } from 'constants/common';
import FlexContainer from 'components/ui/FlexContainer';
import FlexItem from 'components/ui/FlexItem';

export default function FormAndSumaryContainer(props) {
	const [price, setPrice] = useState(1000);
	const [deposit, setDeposit] = useState(200);
	const [date, setDate] = useState(new Date());
	const [loanTerm, setLoanTerm] = useState(2);
	const [depositError, setDepositError] = useState(false);
	const [dateError, setDateError] = useState(false);
	const [monthly, setMonthly] = useState('');
	const [loanTotal, setLoanTotal] = useState('');
	const [loanTermMonths, setLoanTermMonths] = useState('');
	const [paymentSchedule, setPaymentSchedule] = useState([]);

	// // const { setMonthlyPayments, setLoanTotal, setLoanTermMonths } = useContext(Context);

	useEffect(() => {
		setDepositError(deposit !== '' && deposit < price * MIN_DEPOSIT);
	}, [deposit, price]);

	useEffect(() => {
		setDateError(date.getTime() < new Date().getTime() - ONE_DAY_IN_MS);
	}, [date]);

	useEffect(() => {
		props.setMonthly(monthly);
	}, [monthly]);

	function onSubmit(e) {
		e.preventDefault();
		if (!dateError && !depositError) {
			console.log('submit');
			const monthlyPayment = (price - deposit) / (loanTerm * MONTHS_IN_YR);
			const loanTotal = price - deposit + COMP_FEE + ARR_FEE;
			const loanTermMonths = loanTerm * MONTHS_IN_YR;
			setLoanTotal(loanTotal);
			setMonthly(monthlyPayment);
			setLoanTermMonths(loanTermMonths);
			const payDates = index => new Date().setMonth(date.getMonth() + index, 1);
			const paymentSchedule = Array(loanTermMonths)
				.fill()
				.map((x, index) => ({ date: payDates(index + 1), amount: monthlyPayment }));
			setPaymentSchedule(paymentSchedule);
			console.log(paymentSchedule);
		}
	}

	return (
		<FlexContainer>
			<FlexItem flex='1 1 300px'>
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
			</FlexItem>
			<FlexItem flex='3 1 320px'>
				<LoanSummary
					monthly={monthly}
					loanTotal={loanTotal}
					loanTermMonths={loanTermMonths}
					paymentSchedule={paymentSchedule}
				/>
			</FlexItem>
			{/* <div>{date.getMonth()}</div>
				<div>{new Date().setMonth(date.getMonth() + 1, 1)}</div> */}
		</FlexContainer>
	);
}

FormAndSumaryContainer.propTypes = {};
