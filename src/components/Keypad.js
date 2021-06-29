
import React, {Component} from 'react';

export default class Keypad extends Component {


	render() {
		return (
			<div>
				<input type="password" onKeyUp={{console.log('Entering password...')}} />
			</div>
		)
	}
}
