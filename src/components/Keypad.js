import React, { Component } from 'react';

export default class Keypad extends Component {
    handleUp = () => {
        console.log('Entering password...')
    }

    render(){
        return (
            <div>
                <input type='password' onKeyUp={this.handleUp}></input>
            </div>
        )
    }
}