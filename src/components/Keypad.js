// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends React.Component {

	handleKeyUp = () => {
		return console.log('Entering password...')
	}

	render() {
		return (
			<input type="password" onKeyUp={this.handleKeyUp}></input>
		)
	}
}
