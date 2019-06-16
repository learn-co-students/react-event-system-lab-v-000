import React from 'react';
import PropTypes from 'prop-types';

class EyesOnMe extends React.Component {

	focus = () => {
			console.log('Good!');
		}

	blur = () => {
			console.log('Hey! Eyes on me!');
		}

	render () {
		return(
			<div>
				<button onFocus={this.focus} onBlur={this.blur}></button>
			</div>
		)
	}

}

export default EyesOnMe;



//In the components/EyesOnMe.js file, create a EyesOnMe React component.
//In that component, render a button.
//On that button, add event handlers that listens for the focus and blur events.
//When the focus event fires, 
//use console.log to print out the text 'Good!'.
//When the blur event fires, 
//use console.log to print out the text 'Hey! Eyes on me!'.