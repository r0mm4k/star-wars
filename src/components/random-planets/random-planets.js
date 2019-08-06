import React from 'react';

import './random-planets.css';

const RandomPlanets = ({id, name, img, population, rotationPeriod, diameter}) => {
	return (
		<div className='random-planet jumbotron rounded'>
			<img className='planet-image'
					 src={img} alt=''/>
			<div>
				<h4>{name}</h4>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<span className='term'>Population</span>
						<span>{population}</span>
					</li>
					<li className='list-group-item'>
						<span className='term'>Rotation Period</span>
						<span>{rotationPeriod}</span>
					</li>
					<li className='list-group-item'>
						<span className='term'>Diameter</span>
						<span>{diameter}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default RandomPlanets;