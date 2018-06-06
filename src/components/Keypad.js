// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

	keydown = () => {
		console.log('Entering password...');
	}

	render() {
		return (
			<input type="password" onKeyUp={this.keydown}></input>
		)
	}

}

export default Keypad;