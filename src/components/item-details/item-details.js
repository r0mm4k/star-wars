import React, { Component } from 'react';

import './item-details.css';
import Spinner from '../spinner/spinner';

export default class ItemDetails extends Component {

	state = {
		item: null,
		image: null,
		loading: false
	};

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updateItem();
		}
	}

	updateItem() {
		const {itemId, getData, getImageUrl} = this.props;
		if (!itemId) {
			return;
		}

		this.setState({loading: true});

		getData(itemId)
			.then((item) => {
				this.setState({item, image: getImageUrl(item), loading: false});
			});
	}

	render() {

		const {item, image, loading} = this.state;
		if (loading || !item) {
			return <Spinner/>
		}
		const {name} = item;
		return (
			<div className='item-details card'>
				<img className='item-image'
						 src={image}
						 alt='character'/>

				<div className='card-body'>
					<h4>{name}</h4>
					<ul className='list-group list-group-flush'>
						{
							React.Children.map(this.props.children, (child) => {
								return React.cloneElement(child, { item })
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}