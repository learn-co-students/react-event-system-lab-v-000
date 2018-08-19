// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    // Function for focus
    focusButton = () => {
        console.log('Good!')
    }
    
    // Function for blur
    blurButton = () => {
        console.log('Hey! Eyes on me!')
    }
    
    render() {
        return (
          <div className="eyesonme">
            <button 
                onFocus={this.focusButton}
                onBlur={this.blurButton}
            ></button>
          </div>
        );
    }
}
