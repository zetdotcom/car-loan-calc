import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoanSummary from 'components/LoanSummary';

describe('Loan Summary', () => {
	const defaultProps = {
		monthly: '',
		loanTotal: '',
		paymentSchedule: [],
	};

	const renderComponent = newProps => {
		const props = {
			...defaultProps,
			...newProps,
		};
		const utils = render(<LoanSummary {...props} />);
		const component = <LoanSummary {...props} />;
		return {
			component,
			...utils,
		};
	};

	afterEach(cleanup);

	it('should match snapshot', () => {
		const { asFragment } = renderComponent();
		expect(asFragment()).toMatchSnapshot();
	});
	it('should display correct total and monthly amount and format', () => {
		const { getByTestId, getAllByTestId, rerender } = renderComponent();

		const mockPaymentSchedule = [
			{ date: 1583023189882, amount: 421.3333333333333, info: 'incl. £80 arrangement fee' },
			{ date: 1585697989882, amount: 333.3333333333333, info: '' },
			{ date: 1588289989882, amount: 353.3333333333333, info: 'incl. £20 completion fee' },
		];

		const totalLoan = getByTestId('totalLoanDisplay');
		const monthly = getByTestId('monthlyPaymentDisplay');

		expect(totalLoan).toHaveTextContent('£0.00');
		expect(monthly).toHaveTextContent('£0.00');

		rerender(renderComponent({ loanTotal: 8108, monthly: 100, paymentSchedule: mockPaymentSchedule }).component);
		const payListItem = getAllByTestId('payListItem');
		const payListSpan = getAllByTestId('payListSpan');
		expect(totalLoan).toHaveTextContent('£8,108.00');
		expect(monthly).toHaveTextContent('£100.00');
		expect(payListItem[0]).toBeInTheDocument();
		expect(payListSpan[0]).toBeInTheDocument();
		expect(payListItem[0]).toHaveTextContent('01 Mar 2020 - £421.33');
		expect(payListSpan[0]).toHaveTextContent('incl. £80');
	});
});
