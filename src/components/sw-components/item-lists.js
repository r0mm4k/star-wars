import React from 'react';
import ItemList from '../item-list/item-list';
import withData from '../hoc-helper/with-data';
import withChildFunction from '../hoc-helper/with-child-function';
import withSwapiService from '../hoc-helper/with-swapi-service';

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const mapPersonToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPeople
	};
};
const mapPlanetToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPlanets
	};
};
const mapStarshipToProps = (swapiService) => {
	return {
		getData: swapiService.getAllStarships
	};
};

const PersonList = withSwapiService(mapPersonToProps)(withData(withChildFunction(renderName)(ItemList)));
const PlanetList = withSwapiService(mapPlanetToProps)(withData(withChildFunction(renderName)(ItemList)));
const StarshipList = withSwapiService(mapStarshipToProps)(withData(withChildFunction(renderModelAndName)(ItemList)));

export { PersonList, PlanetList, StarshipList };