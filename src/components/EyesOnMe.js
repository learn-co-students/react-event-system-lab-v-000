// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
    onButtonFocus(event) {
        console.log('Good!');
    }

    onButtonBlur(event) {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
        <button onFocus={this.onButtonFocus} onBlur={this.onButtonBlur} >
        </button>
        )
    }
}

export default EyesOnMe;