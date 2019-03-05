import React, { Component } from 'react';

export default class Keypad extends Component {

    keyOutput = () => {
        console.log("Entering password...")
    }

    render() {
       return (
            <input onKeyUp={this.keyOutput} type="password" />
       ) 
    }

}