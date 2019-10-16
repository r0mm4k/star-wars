import React from 'react';
import ItemDetails from '../item-details/item-details';
import Record from '../record/record';
import withSwapiService from '../hoc-helper/with-swapi-service';
import compose from '../hoc-helper/compose';

const StarshipDetails = (props) => {
	return (
		<ItemDetails {...props}>

			<Record field='model' label='Model'/>
			<Record field='length' label='Length'/>
			<Record field='costInCredits' label='Cost'/>
		</ItemDetails>
	);
};

const mapMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getStarship,
		getImageUrl: swapiService.getStarshipImage
	}
};

export default compose(withSwapiService(mapMethodsToProps))(StarshipDetails);