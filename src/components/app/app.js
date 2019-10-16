import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SwapiServiceProvider } from '../swapi-services-context/swapi-services-context';
import SwapiService from '../../services/swapi';

import Header from '../header/header';
import RandomPlanet from '../random-planets/random-planets';
import ErrorBoundary from '../error-boundary/error-boundary';
import PeoplePage from '../pages/people-page';
import PlanetsPage from '../pages/planets-page';
import StarshipsPage from '../pages/starships-page';
import StarshipDetails from '../sw-components/starship-details';

import './app.css';
import LoginPage from '../pages/login-page';
import SecretPage from '../pages/secret-page';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class App extends Component {

	state = {
		swapiService: new SwapiService(),
		isLoggedIn: false
	};

	render() {
		const {swapiService, isLoggedIn} = this.state;
		return (
			<ErrorBoundary>
				<SwapiServiceProvider value={swapiService}>
					<Router>
						<div className='star-wars-app'>
							<Header/>
							<RandomPlanet/>
							<Switch>
								<Route path='/' exact render={() => <h2>Welcome to StarDB</h2>}/>
								<Route path='/people/:id?' render={() => <PeoplePage/>}/>
								<Route path='/planets' component={PlanetsPage}/>
								<Route path='/starships' exact component={StarshipsPage}/>
								<Route path='/starships/:id' render={({match}) => <StarshipDetails itemId={match.params.id}/>}/>
								<Route path='/login' render={() => <LoginPage
									isLoggedIn={isLoggedIn}
									onLogin={() => this.setState({isLoggedIn: true})}/>}/>
								<Route path='/secret' render={() => <SecretPage isLoggedIn={isLoggedIn}/>}/>
								<Route render={() =><ErrorIndicator/>}/>
							</Switch>
						</div>
					</Router>
				</SwapiServiceProvider>
			</ErrorBoundary>

		);
	}
}