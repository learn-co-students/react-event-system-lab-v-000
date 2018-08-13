import React, { Component } from 'react';

export default class Keypad extends Component {
	response = () => console.log("Entering password...")

	render() {
		return (<input type="password" onKeyUp={this.response} />)
	}
}
