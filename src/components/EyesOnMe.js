// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    focusEyes = () => {
        console.log('Good!')
    }

    blurEyes = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button
                onFocus={this.focusEyes}
                onBlur={this.blurEyes}
                >Buddy</button>
            </div>
        )
    }
}