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
	const [price, setPrice] = useState(10000);
	const [deposit, setDeposit] = useState(2000);
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
		props.setCarPrice(price);
	}, [monthly, price, props]);

	useEffect(() => {
		loanTermMonths && getPaymentSchedule();
	}, [loanTermMonths]);

	function getPaymentSchedule() {
		const payDates = index => new Date().setMonth(date.getMonth() + index, 1);
		const filledArray = Array(loanTermMonths).fill();
		const paymentSchedule = filledArray.map((x, index) => {
			let monthlyPay = monthly;
			let info = '';
			if (index === 0) {
				monthlyPay = monthly + ARR_FEE;
				info = 'incl. £80 arrangement fee';
			}
			if (index === filledArray.length - 1) {
				monthlyPay = monthly + COMP_FEE;
				info = 'incl. £20 completion fee';
			}
			return { date: payDates(index + 1), amount: monthlyPay, info: info };
		});

		setPaymentSchedule(paymentSchedule);
	}

	function onSubmit(e) {
		e.preventDefault();
		if (!dateError && !depositError) {
			const monthlyPayment = (price - deposit) / (loanTerm * MONTHS_IN_YR);
			const loanTotal = price - deposit + COMP_FEE + ARR_FEE;
			const loanTermMonths = loanTerm * MONTHS_IN_YR;
			setLoanTotal(loanTotal);
			setMonthly(monthlyPayment);
			setLoanTermMonths(loanTermMonths);
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
			<FlexItem flex='3 1 320px' maxHeight='570px' justifyContent='center'>
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
