// Code Keypad Component Here
import React, { Component } from 'react';
class Keypad extends Component {
	input = () => {
		console.log('Entering password...');
	};
	render() {
		return <input onKeyUp={this.input} type="password" />;
	}
}
export default Keypad;
