// Code EyesOnMe Component Here
import React, { Component } from 'react';
import Keypad from './Keypad.js'


export default class EyesOnMe extends Component {

	look = () => {
		console.log('Good!')
	}

	good = () => {
		console.log('Hey! Eyes on me!')
	}

	render() {
       return (
       	<button onFocus={this.look} onBlur={this.good}></button>
       	)
    }

}