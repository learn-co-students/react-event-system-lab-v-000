import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    
    focus() {
        return () => console.log("Good!")
    }
    
    blur() {
        return () => console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <button
            onFocus={this.focus()}
            onBlur={this.blur()}>
            THIS IS A BUTTON!
            </button>
        )
    }
}