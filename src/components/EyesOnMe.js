// Code EyesOnMe Component Here
import React, { Component } from 'react'; 
class EyesOnMe extends Component{
	constructor(props){
		super(props)
		this.state = props 
	}

	eyesAreOnMe(e){
		console.log('Good!')
	}

	notOnMe(e){
		console.log('Hey! Eyes on me!'); 
	}

	render(){
		return (<button onBlur={this.notOnMe} onFocus={this.eyesAreOnMe} ></button> );
	}
}

export default EyesOnMe
