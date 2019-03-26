// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {


    focus = () => {
        console.log('Good!')
    }

    blur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
          <div className="EyesOnMe">
            <button onFocus={this.focus} onBlur={this.blur}>Tickle me!</button>
          </div>
        )
      }


}