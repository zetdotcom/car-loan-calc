export const pounds = number => new Intl.NumberFormat('ja-GB', { style: 'currency', currency: 'GBP' }).format(number);
