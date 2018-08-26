import React, { Component } from 'react';

export default class EyesOnMe extends Component {
	onMe = () => {
			console.log('Good!')
		}

	notOnMe = () => {
		console.log('Hey! Eyes on me!')
	}
	
	render() {

		return (
			<button onFocus={this.onMe} onBlur={this.notOnMe}>Look</button>
		)
	}

}
