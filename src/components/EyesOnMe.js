// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    focused= () => console.log('Good!')

    notFocused= () => console.log('Hey! Eyes on me!')

    render() {
        return (
            <button onFocus={this.focused} onBlur={this.notFocused}>
                'Hover over me!'
            </button>
        )
    }

}