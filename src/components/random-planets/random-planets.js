import React from 'react';

import './random-planets.css';

const RandomPlanets = () => {
	return (
		<div className='random-planet jumbotron rounded'>
			<img className='planet-image'
					 src={`https://starwars-visualguide.com/assets/img/planets/2.jpg`} alt=''/>
			<div>
				<h4>Planet Name</h4>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<span className='term'>Population</span>
						<span>000000</span>
					</li>
					<li className='list-group-item'>
						<span className='term'>Rotation Period</span>
						<span>33</span>
					</li>
					<li className='list-group-item'>
						<span className='term'>Diameter</span>
						<span>11</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default RandomPlanets;