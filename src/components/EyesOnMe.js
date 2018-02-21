// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
    a = () => {
        console.log('Good!');
    }
    
    b = () => {
        console.log('Hey! Eyes on me!');
    }
    
    render() {
        return ( <button onFocus={this.a} onBlur={this.b}>Button</button> );
    }
}

export default EyesOnMe
