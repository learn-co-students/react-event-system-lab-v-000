// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component{

    passwordPrint = (event) => {
        console.log('Entering password...');
    }

    render() {
        return <div><input type="password" onKeyUp={this.passwordPrint}/></div>
    }
}