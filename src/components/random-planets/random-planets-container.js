import React, { useState, useEffect } from 'react';

import './random-planets.css';
import RandomPlanets from './random-planets';
import SwapiService from '../../services/swapi';

const RandomPlanetsContainer = (props) => {

	const swapi = new SwapiService();

	const [planet, setPlanet] = useState({planet: null});

	const onPlanetLoaded = (planet) => setPlanet(planet);

	const updatePlanet = (id) => {
		swapi.getPlanet(id)
			.then((planet) => onPlanetLoaded(planet))
	};

	useEffect(() => updatePlanet(Math.floor(Math.random() * 25) + 2), []); //eslint-disable-line

	return <RandomPlanets {...props} {...planet}/>;
};

export default RandomPlanetsContainer;