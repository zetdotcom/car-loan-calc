import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CarsList from 'components/CarsList';

export default function CarsListContainer({ monthly }) {
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setCars([]);
		async function fetchData() {
			const monthlyRounded = Math.round(monthly);
			setLoading(true);
			const response = await fetch(
				`https://cors-anywhere.herokuapp.com/https://www.arnoldclark.com/used-cars/search.json?payment_type=monthly&amp;min_price=${monthlyRounded -
					5}&amp;max_price=${monthlyRounded + 5}`
			);
			const json = await response.json();
			await setLoading(false);
			await setCars(json.searchResults?.slice(0, 6));
			await console.log(json.searchResults?.slice(0, 6));
		}
		monthly && fetchData();
	}, [monthly]);

	return <CarsList cars={cars} loading={loading} />;
}

CarsListContainer.propTypes = {};
