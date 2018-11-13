// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {


	blurEvent = () => {
		console.log('Hey! Eyes on me!')
	}

	focusEvent = () => {
		console.log('Good!')
	}




	render(){
		return (
			<button className='EyesOnMe' onFocus={this.focusEvent} onBlur={this.blurEvent}>Button</button>
		)
	}
}


export default EyesOnMe;