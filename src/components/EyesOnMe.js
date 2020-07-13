// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    constructor() {
        super()
    }

    focusButton = () => {
        console.log("Good!")
    }

    blurButton = () => {
        console.log("Hey! Eyes on me!")
    }
    
    render() {
        return (
            <div>
                <button onFocus={this.focusButton} onBlur={this.blurButton} ></button>
            </div>
        )
    }
}