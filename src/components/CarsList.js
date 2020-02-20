import React from 'react';

export default function CarsList({ cars, loading }) {
	return (
		<div>
			Cars:{' '}
			{loading ? (
				<div>LOADING...</div>
			) : (
				<ul>
					{cars.map(car => {
						return (
							<li>
								{car.title.name} | {car.title.variant}
								<img src={car.thumbnails[0]} />
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
