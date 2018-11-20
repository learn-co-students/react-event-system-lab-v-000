// Code Keypad Component Here
import React, { Component } from 'react';
export default class Keypad extends Component {

    message = () => console.log('Entering password...')
    render(){
        return(
            <input onKeyUp={this.message} type="password"/>
        )
    }
}