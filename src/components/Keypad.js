import React from 'react';
// Code Keypad Component Here
export default class Keypad extends React.Component{

    handleKeyPress=(event)=> console.log('Entering password...')

    render(){
        return (
            <input onKeyUp={this.handleKeyPress} type="password" />
        )
    }
}
