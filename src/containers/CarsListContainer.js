import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function CarsListContainer({ monthly }) {
	useEffect(() => {
		async function fetchData() {
			// You can await here
			const response = await fetch(
				`https://cors-anywhere.herokuapp.com/https://www.arnoldclark.com/used-cars/search.json?payment_type=monthly&amp;min_price=${monthly -
					5}&amp;max_price=${monthly + 5}`
			);
			const json = await response.json();
			await console.log(json.searchResults);
		}
		fetchData();
	}, []);
	return (
		<>
			<div>cars list container. Monthly: {monthly}</div>
		</>
	);
}

CarsListContainer.propTypes = {};
