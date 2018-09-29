import React, { Component } from 'react';

export default class Keypad extends Component {

  keyUpJawn = () => {
    console.log('Entering password...')
  }

  render(){
    return (
      <div class="Keypad">
        <input type="password" onKeyUp={ () => this.keyUpJawn() }/>
      </div>
    )
  }

}
