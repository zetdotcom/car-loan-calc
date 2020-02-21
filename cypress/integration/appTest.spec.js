import '@testing-library/cypress/add-commands';
/// <reference types="Cypress" />

context('Assertions', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	describe('Test loan summary results', () => {
		it('should show correct number loan total, monthly pay and payment schedule', () => {
			cy.findByLabelText('1 year').click();
			cy.findByLabelText('Vehicle price *').type(10000);
			cy.findByLabelText('Deposit *').type(2500);
			cy.findByText(/show results/i).click();
			cy.findByTestId('totalLoanDisplay').should('contain', '£7,608.00');
			cy.findByTestId('monthlyPaymentDisplay').should('contain', '£625.00');
			const payListItems = cy.findAllByTestId('payListItem');
			payListItems.should('have.length', 12);
			console.log('asdasdasd', payListItems);
			payListItems.first().should('contain', '£713.00');
			payListItems.next().should('contain', '£625.00');
		});

		it('should update loan summary', () => {
			cy.findByLabelText('Vehicle price *').type(10000);
			cy.findByLabelText('Deposit *').type(2500);
			cy.findByLabelText('2 years').click();
			cy.findByText(/show results/i).click();
			cy.findByTestId('totalLoanDisplay').should('contain', '£7,608.00');
			cy.findByTestId('monthlyPaymentDisplay').should('contain', '£312.50');
			const payListItems = cy.findAllByTestId('payListItem');
			payListItems.should('have.length', 24);
			console.log('asdasdasd', payListItems);
			payListItems.first().should('contain', '£400.50');
			payListItems.next().should('contain', '£312.50');
		});
	});
});
