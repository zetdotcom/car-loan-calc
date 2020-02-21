import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoanForm from 'components/LoanForm';

describe('LoanForm', () => {
	const defaultProps = {
		onSubmit: jest.fn(),
		price: '',
		handlePriceChange: jest.fn(),
		deposit: '',
		handleDepositChange: jest.fn(),
		date: 'Thu Feb 20 2020 21:41:58 GMT+0000 (Greenwich Mean Time)',
		handleDateChange: jest.fn(),
		loanTerm: 1,
		handleLoanTermChange: jest.fn(),
		depositError: false,
	};

	const renderComponent = newProps => {
		const props = {
			...defaultProps,
			...newProps,
		};
		const utils = render(<LoanForm {...props} />);
		const component = <LoanForm {...props} />;
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
	it('should display correct form fields', async () => {
		const { getByLabelText, rerender } = renderComponent();
		const priceField = getByLabelText('Vehicle price *');
		// const priceField = getByTestId('priceInput');
		const depositField = getByLabelText('Deposit *');
		const dateField = getByLabelText('Delivery date');
		const checkbox1year = getByLabelText('1 year');
		const checkbox2years = getByLabelText('2 years');

		expect(priceField).toHaveTextContent('');
		expect(depositField).toHaveTextContent('');
		expect(dateField).toHaveValue('20/02/2020');
		expect(checkbox1year).toBeChecked();
		expect(checkbox2years).not.toBeChecked();

		rerender(renderComponent({ price: 1000, deposit: 200, loanTerm: 2 }).component);

		expect(priceField).toHaveValue(1000);
		expect(depositField).toHaveValue(200);
		expect(checkbox1year).not.toBeChecked();
		expect(checkbox2years).toBeChecked();
	});
});
