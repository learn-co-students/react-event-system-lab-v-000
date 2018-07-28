// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
    passwordStatus = () => {
        console.log('Entering password...')
    }
    render () {
        return (
            <input type="password" onKeyUp={this.passwordStatus}/>
        )
    }
}