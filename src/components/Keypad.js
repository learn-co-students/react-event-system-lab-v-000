import React, { Component } from 'react';

export default class Keypad extends Component {
	typing = () => {
			console.log('Entering password...')
	}
	
	render() {
		return (
			<input type="password" onKeyUp={this.typing} />
		)
	}
}
