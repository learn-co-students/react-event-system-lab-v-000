// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

    keyentered = () => {
        console.log('Entering password...')
    }

    render() {
        return (
          <div className="keypad">
            <input type="password" onKeyUp={this.keyentered}/>
          </div>
        )
      }


}