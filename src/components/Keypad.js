import React from 'react'

export default class Keypad extends React.Component {
	handleKeyUp = () => console.log('Entering password...')

	render() {
		return (
			// handleKeyUp should be called when the user releases a key in the input field
			<input type='password' onKeyUp={this.handleKeyUp} />
		)
	}
}
