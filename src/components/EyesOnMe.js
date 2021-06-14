// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {
    
    handleFocus = () => {
        console.log("Good!")
    }

    handleBlur = () => {
        console.log("Hey! Eyes on me!")
    }

    render(){

        return(<button onBlur={this.handleBlur} onFocus={this.handleFocus}></button>)
    
    }

}

export default EyesOnMe