// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
    password = () => {
        console.log('Entering password...')
    }
    render() {
        return (
            <input  onKeyUp={this.password} type='password' />
        )
    }
}