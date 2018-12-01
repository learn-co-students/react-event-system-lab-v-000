import React, { Component} from 'react'
export default class EyesonMe extends Component {
 
  focus = (event) => {
    console.log('Good!');
  }

  blur = (event) => {
  	console.log("Hey! Eyes on me!")
  }

  render() {
    return (
    	<button 
    	onFocus={this.focus} 
    	onBlur={this.blur}
    	>
    	</button>
    );
  }
}