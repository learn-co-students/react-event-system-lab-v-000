// Code Keypad Component Here
import React, { Component } from 'react';
import EyesOnMe from './EyesOnMe.js'


export default class Keypad extends Component {

	passwordOutput = () => {
       console.log('Entering password...')
	}

	render() {
      return (
           	<div><input type="password" onKeyUp={this.passwordOutput} /></div>
      )
    }
}