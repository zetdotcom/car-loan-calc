import React, { useState, useEffect } from 'react';
import LoanForm from 'components/LoanForm';
import LoanSummary from 'components/LoanSummary';
import { ARR_FEE, MIN_DEPOSIT, COMP_FEE, MONTHS_IN_YR } from 'constants/common';
import FlexContainer from 'components/ui/FlexContainer';
import FlexItem from 'components/ui/FlexItem';

export default function FormAndSumaryContainer(props) {
	const [price, setPrice] = useState('');
	const [deposit, setDeposit] = useState('');
	const [date, setDate] = useState(new Date());
	const [loanTerm, setLoanTerm] = useState(2);
	const [depositError, setDepositError] = useState(false);
	const [monthly, setMonthly] = useState('');
	const [loanTotal, setLoanTotal] = useState('');
	const [loanTermMonths, setLoanTermMonths] = useState('');
	const [paymentSchedule, setPaymentSchedule] = useState([]);

	useEffect(() => {
		setDepositError(deposit !== '' && deposit < price * MIN_DEPOSIT);
	}, [deposit, price]);

	useEffect(() => {
		props.setMonthly(monthly);
	}, [monthly, props]);

	useEffect(() => {
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

		loanTermMonths && getPaymentSchedule();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loanTermMonths, monthly]);

	function onSubmit(e) {
		e.preventDefault();
		if (!depositError) {
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
				/>
			</FlexItem>
			<FlexItem flex='3 1 320px' justifyContent='center'>
				<LoanSummary monthly={monthly} loanTotal={loanTotal} paymentSchedule={paymentSchedule} />
			</FlexItem>
		</FlexContainer>
	);
}

FormAndSumaryContainer.propTypes = {};
