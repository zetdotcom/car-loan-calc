import 'date-fns';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from 'components/ui/Button';
import SmallHeading from 'components/ui/SmallHeading';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import styled from 'styled-components';
import { FormControl } from '@material-ui/core';

export const PaperStyled = styled(Paper)`
	display: flex;
	flex-direction: column;
	padding: 36px 48px;
	/* margin: 10px; */
	/* height: 300px; */
	/* min-height: 50vh; */
	justify-content: space-around;
	@media (max-width: 430px) {
		padding: 10px 15px;
		width: 100%;
	}
`;

const RadioGroupStyled = styled(RadioGroup)`
	&& {
		display: flex;
		flex-direction: row;
	}
`;

const FormStyled = styled.form`
	display: flex;
	flex: 1 1 300px;
`;

export default function LoanForm(props) {
	const {
		onSubmit,
		price,
		handlePriceChange,
		deposit,
		handleDepositChange,
		date,
		handleDateChange,
		loanTerm,
		handleLoanTermChange,
		depositError,
		dateError,
	} = props;

	console.log(date.getTime(), new Date().getTime(), 60 * 60 * 24);

	return (
		<FormStyled onSubmit={onSubmit}>
			<PaperStyled elevation={3}>
				<SmallHeading>Start loan calculation</SmallHeading>
				<TextField
					required
					type='number'
					margin='normal'
					id='price-input'
					label='Vehicle price'
					variant='outlined'
					value={price}
					onChange={handlePriceChange}
				/>
				<TextField
					required
					margin='normal'
					type='number'
					error={depositError}
					// helperText={depositError ? `Deposit value cannot be lower than 15% of price: ${price * 0.15}` : ''}
					helperText={`Deposit value must beat least 15% of price: ${price * 0.15}`}
					id='deposit-input'
					label='Deposit'
					variant='outlined'
					value={deposit}
					onChange={handleDepositChange}
				/>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<DatePicker
						error={dateError}
						inputVariant='outlined'
						helperText={dateError ? `Delivery date cannot be in the past` : ''}
						format='dd/MM/yyyy'
						margin='normal'
						id='date-picker'
						label='Delivery date'
						value={date}
						onChange={handleDateChange}
						InputAdornmentProps={{ position: 'start' }}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>
				</MuiPickersUtilsProvider>
				<FormControl component='fieldset' margin='normal'>
					<FormLabel component='legend'>Loan Term</FormLabel>
					<RadioGroupStyled aria-label='Loan term' name='loan term' value={loanTerm} onChange={handleLoanTermChange}>
						<FormControlLabel value={1} control={<Radio />} label='1 year' />
						<FormControlLabel value={2} control={<Radio />} label='2 years' />
						<FormControlLabel value={3} control={<Radio />} label='3 years' />
					</RadioGroupStyled>
				</FormControl>
				<br />
				<Button variant='contained' color='primary' type='submit'>
					Show results
				</Button>
			</PaperStyled>
			{/* <div>
				price: {price}
				<br />
				deposit: {deposit}
				<br />
				date: {JSON.stringify(date)}
				<br />
				loan: {loanTerm} {typeof loanTerm}
			</div> */}
		</FormStyled>
	);
}
