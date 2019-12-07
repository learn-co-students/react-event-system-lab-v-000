// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    handleOnKeyUp = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input onKeyUp={this.handleOnKeyUp} type="password" />
        )
    }
        
}