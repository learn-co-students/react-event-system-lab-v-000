import React from 'react';
import PropTypes from 'prop-types';

class Keypad extends React.Component {
	password = () => {
			console.log('Entering password...');
		}

	render () {
		return(
			<div>
				<input onKeyUp={this.password} type="password"></input>
			</div>
		)
	}

}

export default Keypad;
