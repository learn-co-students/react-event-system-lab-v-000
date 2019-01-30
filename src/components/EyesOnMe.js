import React, { Component } from 'react';

export default class EyesOnMe extends Component {

	focusMethod = () => {
		console.log('Good!')
	}

	blurMethod = () => {
		console.log('Hey! Eyes on me!')
	}

	render() {
		return <button onFocus={this.focusMethod} onBlur={this.blurMethod}></button>
	}
}