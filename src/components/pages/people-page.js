import React from 'react';
import Row from '../row/row';
import { PersonList } from '../sw-components/item-lists';
import PersonDetails from '../sw-components/person-details';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({match, history}) => {
	return (
		<Row
			left={<PersonList onItemSelected={(itemId) => history.push(itemId)}/>}
			right={<PersonDetails itemId={match.params.id || 30}/>}/>
	);
};

export default withRouter(PeoplePage);