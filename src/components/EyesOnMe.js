// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    _onFocus = () => {
        console.log('Good!')
    }

    _onBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button 
                onBlur={this._onBlur}
                onFocus={this._onFocus}
                >Button</button>
        )
    }
}