// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EeysOnMe extends Component {
    handleFocus = () => {
        console.log('Good!')
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return <button onFocus={this.handleFocus} onBlur={this.handleBlur}>In The Club</button>
    }
}