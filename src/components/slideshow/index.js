import React, { Component } from 'react';

import family from '../../images/family.jpg';
import family2 from '../../images/family2.jpg';
import pup from '../../images/pup.jpg';
import hunny from '../../images/hunny.jpg';
import tunnel from '../../images/tunnel.jpg';
import computer from '../../images/computer.jpg';
import foods from '../../images/foods.jpg';

import './styles.css';

export default class SlideShow extends Component {
	state = {
			count: 0
	}

	componentDidMount () {
		this.interval = setInterval(this.rotatePicture, 6000);
	}

	rotatePicture = () => {
		console.log(this.state.count);
		this.setState((state) => ({
			count: state.count == this.images().length - 1 ? 0 : state.count + 1
		}));
	}

	images = () => [
		family,
		tunnel,
		hunny,
		pup,
		family2,
		computer,
		foods
	];

	render () {
		const img = this.images()[this.state.count];
		return (
			<div className="picture" style={{backgroundImage: `url(${img})`}} />            
		)
	}
}