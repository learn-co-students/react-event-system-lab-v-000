import React from 'react';

export default class Keypad extends React.Component {

	handleKeyUp = () => {console.log("Entering password...")}

	render() {
		return (
			<div>
				<p>Enter a password</p>
				<input type="password" onKeyUp={this.handleKeyUp} />
			</div>
		)
	}
}