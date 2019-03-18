import React, { Component } from 'react';

export default class EyesOnMe extends Component {

	watching = () => {
		console.log("Good!")
	}

	drifting = () => {
		console.log("Hey! Eyes on me!")
	}
  
  render() {
    return (
    	<form>
    		<button onFocus={this.watching} onBlur={this.drifting} />
    	</form>
    )
  }
  
}
