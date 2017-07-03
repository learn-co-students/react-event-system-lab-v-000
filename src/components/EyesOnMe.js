// Code Keypad Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
		focus = () => {
			console.log("Good!")
		}

		blur = () => {
			console.log("Hey! Eyes on me!")
		}
	render () {
		return (

			<div>
			<button onBlur={this.blur} onFocus={this.focus}></button>
			</div>
		)
	}
}// Code EyesOnMe Component Here