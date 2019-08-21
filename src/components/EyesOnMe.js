// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    blurEvent = () => {
        console.log('Hey! Eyes on me!');
      }
    focusEvent = () => {
        console.log('Good!');
      }
    render() {
        return (
            <div>
                <button onBlur={this.blurEvent} onFocus={this.focusEvent}></button>
            </div>
        )
    }
}
