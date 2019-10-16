import React, { Component } from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planets/random-planets';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';

import './app.css';

export default class App extends Component {

	state = {
		showRandomPlanet: true,
		hasError: false
	};

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			}
		});
	};

	componentDidCatch() {
		this.setState({hasError: true});
	}

	render() {

		if (this.state.hasError) {
			return <ErrorIndicator/>
		}

		const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

		return (
			<div className='star-wars-app'>
				<Header/>
				{planet}
				<PeoplePage/>
			</div>
		);
	}
}