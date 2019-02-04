import React, { Component } from 'react';

export default class Keypad extends Component {
    
    entering() {
        return () => console.log('Entering password...')
    }
    
    render() {
        return (
            <input type="password"
                   onKeyUp={this.entering()} />
        )
    }
}