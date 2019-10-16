import React, { Component } from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planets/random-planets';
import './app.css';
import ErrorBoundary from '../error-boundary/error-boundary';
import { SwapiServiceProvider } from '../swapi-services-context/swapi-services-context';
import SwapiService from '../../services/swapi';
import PeoplePage from '../pages/people-page';
import PlanetsPage from '../pages/planets-page';
import StarshipsPage from '../pages/starships-page';

export default class App extends Component {

	swapiService = new SwapiService();

	render() {
		return (
			<ErrorBoundary>
				<SwapiServiceProvider value={this.swapiService}>
					<div className='star-wars-app'>
						<Header/>
						<RandomPlanet/>
						<PeoplePage/>
						<PlanetsPage/>
						<StarshipsPage/>
					</div>
				</SwapiServiceProvider>
			</ErrorBoundary>

		);
	}
}