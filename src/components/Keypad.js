// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
	enterPass = () => {
		console.log('Entering password...');
	}

	render() {
		return (
			<input onKeyUp={this.enterPass} type="password" />
			)
	}
}