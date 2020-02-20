import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { DATE_FORMAT } from 'constants/common';
import { pounds } from 'utils';
import PaperStyled from 'components/ui/PaperStyled';
import styled from 'styled-components';
import { Heading2, Heading3 } from './ui/Headings';
import FlexItem from 'components/ui/FlexItem';

export default function LoanSummary(props) {
	const { monthly, loanTotal, loanTermMonths, paymentSchedule } = props;

	return (
		<div>
			<Heading2>Loan summary</Heading2>
			<Heading3>Total loan amount (incl. fees): {pounds(loanTotal)}</Heading3>
			<Heading3>Monthly payment: {pounds(monthly)}</Heading3>
			<ul>
				{paymentSchedule.map(item => (
					<li>
						<p>
							{format(item.date, DATE_FORMAT)} - {pounds(item.amount)}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}

LoanSummary.propTypes = {};
