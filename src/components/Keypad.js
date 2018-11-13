// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {


	pwdInput = () => {
		console.log('Entering password...')
	}

	render() {
		return (
		<input type="password" className='keypad' onKeyUp={this.pwdInput}></input>
		)
	}
}

export default Keypad;