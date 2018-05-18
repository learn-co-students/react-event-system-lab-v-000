// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
	attention = () => {
		console.log('Good!');
	}

	zoneOut = () => {
		console.log('Hey! Eyes on me!');
	}

	render() {
		return (
			<button onFocus={this.attention} onBlur={this.zoneOut}>Me</button>
			)
	}
}