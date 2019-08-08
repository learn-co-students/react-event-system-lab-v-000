// Code Keypad Component Here
import React, {Component} from 'react' 

class Keypad extends Component{
	constructor(props){
		super(props)
		this.state = props 
	}

	detectTyping(e){
		console.log("Entering password..."); 
	}

	render(){
		return ( <input type='password' onKeyUp={this.detectTyping} /> );
	}
}

export default Keypad
