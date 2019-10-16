import React from 'react';
import { SwapiServiceConsumer } from '../swapi-services-context/swapi-services-context';

const withSwapiService = (Wrapped, mapMethodsToProps) => {
	return (props) => {
		return (
			<SwapiServiceConsumer>
				{(swapiService) => {
					const serviceProps = mapMethodsToProps(swapiService);
					return (<Wrapped {...serviceProps} {...props}/>
					);
				}}
			</SwapiServiceConsumer>
		);
	}
};

export default withSwapiService;