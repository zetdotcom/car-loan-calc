import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { DATE_FORMAT } from 'constants/common';
import { pounds } from 'utils';
import { Heading2, Heading3 } from './ui/Headings';
import styled from 'styled-components';

const PaymentScheduleList = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 0;
	align-items: center;
`;

const PaymentScheduleListItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid gray;
	background: lightgray;
	border-radius: 4px;
	list-style: none;
	width: 200px;
	margin: 5px;
	& span {
		font-size: 0.8em;
	}
`;

export default function LoanSummary(props) {
	const { monthly, loanTotal, paymentSchedule } = props;

	return (
		<div>
			<Heading2>Loan summary</Heading2>
			<Heading3 data-testid='totalLoanDisplay'>Total loan amount (incl. fees): {pounds(loanTotal)}</Heading3>
			<Heading3 data-testid='monthlyPaymentDisplay'>Monthly payment: {pounds(monthly)}</Heading3>
			<PaymentScheduleList>
				{paymentSchedule.map(item => (
					<PaymentScheduleListItem key={item.date} data-testid='payListItem'>
						<p>
							{format(item.date, DATE_FORMAT)} - {pounds(item.amount)}
						</p>
						<span data-testid='payListSpan'>{item.info}</span>
					</PaymentScheduleListItem>
				))}
			</PaymentScheduleList>
		</div>
	);
}

LoanSummary.propTypes = {};
