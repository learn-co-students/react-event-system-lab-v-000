// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    focus = () => {
        console.log('Good!')
    }

    blur = () => {
        console.log('Hey! Eyes on me!')
    }
    render(){
        return (
          <button onFocus={this.focus} onBlur={this.blur}></button>
        )
    }
}

// On that button, add event handlers that listens for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'