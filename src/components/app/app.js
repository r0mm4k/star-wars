import React from 'react';

import Header from '../header/header';
import RandomPlanets from '../random-planets/random-planets';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import './app.css';

const App = () => {
	return (
		<div className='star-wars-app'>
			<Header/>
			<RandomPlanets/>

			<div className='row mb2'>
				<div className='col-md-6'>
					<ItemList/>
				</div>
				<div className='col-md-6'>
					<PersonDetails/>
				</div>
			</div>
		</div>
	);
};

export default App;