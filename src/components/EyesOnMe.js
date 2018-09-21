import React, { Component } from 'react';

export default class EyesOnMe extends Component {

	lookHere = () => {
		console.log('Hey! Eyes on me!')
	}

	bad = () => {
		console.log('Good!')
	}

	render() {
		return (
			<button onFocus={this.bad} onBlur={this.lookHere}/>
		)
	}

}