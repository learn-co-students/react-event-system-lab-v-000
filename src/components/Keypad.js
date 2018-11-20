// Code Keypad Component Here
// import React, { Component } from 'react';
// class Keypad extends Component {
import React from 'react';

export default class Keypad extends React.Component {

    message = () => console.log('Entering password...')
    render(){
        return(
            <input onKeyUp={this.message} type="password"/>
        )
    }
}