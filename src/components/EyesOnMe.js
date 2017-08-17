// Code EyesOnMe Component Here

import React from 'react';

export default class EyesOnMe extends React.Component {
	
	userFocus = () => {
		console.log('Good!');
	}

	userBlur = () => {
		console.log('Hey! Eyes on me!');
	}	

	render() {
		return(
			<button onFocus={this.userFocus} onBlur={this.userBlur}>Look</button>
		)
	}
}