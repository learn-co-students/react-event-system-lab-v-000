import React, { Component } from 'react';

class Keypad extends React.Component {
    handleKeyUp = () => console.log('Entering password...')
	render() {
		return (
			<div className="Keypad">
                <input type="password" onKeyUp={this.handleKeyUp} />
			</div>
		);
	}
}

export default Keypad;
