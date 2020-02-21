import React, { useEffect, useState } from 'react';
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
					20}&amp;max_price=${monthlyRounded + 20}`
			);
			const json = await response.json();
			await setLoading(false);
			await setCars(json.searchResults.slice(0, 6));
		}
		monthly && fetchData();
	}, [monthly]);

	return <CarsList cars={cars} loading={loading} />;
}
