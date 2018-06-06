import React from 'react';

export default class Keypad extends React.Component {

	enterPassword = () => {
		console.log("Entering password...");
	}

	render() {
		return (
			<div>
				<input onKeyUp={this.enterPassword} type="password" />
			</div>
		)
	}
}

