import React, { Component } from 'react';

export default class EyesOnMe extends Component {
	talk = () => {
		console.log('Good!')
	}

	wave = () => {
		console.log('Hey! Eyes on me!')
	}

	render() {
		return (
			<button onFocus={this.talk} onBlur={this.wave} ></button>
		)
	}
}
