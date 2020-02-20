import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CarsList from 'components/CarsList';

export default function CarsListContainer({ monthly, carPrice }) {
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
			// const filteredCars = await json.searchResults.filter(car => car.salesInfo.pricing.cashPrice < carPrice + 200);
			await setLoading(false);
			await setCars(json.searchResults.slice(0, 6));
			// await console.log(
			// 	carPrice,
			// 	filteredCars?.slice(0, 6),
			// 	json.searchResults.map(x => x.salesInfo?.pricing.cashPrice)
			// );
		}
		monthly && fetchData();
	}, [monthly, carPrice]);

	return <CarsList cars={cars} loading={loading} />;
}

CarsListContainer.propTypes = {};
