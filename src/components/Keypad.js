import React from 'react';

export class Keypad extends React.Component {

	keyUp = (e) => console.log('Entering password...')

	render() {
		return (<input type="password" onKeyUp={this.keyUp} />)
	}
}

export default Keypad;