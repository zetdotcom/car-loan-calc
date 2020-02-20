import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { DATE_FORMAT } from 'constants/common';
import { pounds } from 'utils';
import PaperStyled from 'components/ui/PaperStyled';
import { Heading2, Heading3 } from './ui/Headings';
import FlexItem from 'components/ui/FlexItem';
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
	/* padding: 5px 15px; */
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
			<Heading3>Total loan amount (incl. fees): {pounds(loanTotal)}</Heading3>
			<Heading3>Monthly payment: {pounds(monthly)}</Heading3>
			<PaymentScheduleList>
				{paymentSchedule.map(item => (
					<PaymentScheduleListItem>
						<p>
							{format(item.date, DATE_FORMAT)} - {pounds(item.amount)}
						</p>
						<span>{item.info}</span>
					</PaymentScheduleListItem>
				))}
			</PaymentScheduleList>
		</div>
	);
}

LoanSummary.propTypes = {};
