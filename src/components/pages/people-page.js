import React, { Component } from 'react';
import Row from '../row/row';
import { PersonList } from '../sw-components/item-lists';
import PersonDetails from '../sw-components/person-details';

export default class PeoplePage extends Component {

	state = {
		selectedItem: 3
	};

	onItemSelected = (selectedItem) => {
		this.setState({selectedItem});
	};

	render() {
		const {selectedItem} = this.state;

		return (
			<Row left={<PersonList onItemSelected={this.onItemSelected}/>} right={<PersonDetails itemId={selectedItem}/>}/>
		);
	}
}