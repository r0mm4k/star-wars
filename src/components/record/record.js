import React from 'react';
import './record.css';

const Record = ({ item, field, label }) => {
	return (
		<li className="record list-group-item">
			<span className="term">{label}</span>
			<span>{ item[field] }</span>
		</li>
	);
};

export default Record;