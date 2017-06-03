import React from 'react';

export default class Keypad extends React.Component {
  constructor() {
    super()

    this.enter = this.enter.bind(this)
  }

  enter() {
    console.log('Entering password...')
  }

  render() {
    return(
      <input type="password" onKeyUp={ this.enter }/>
    )
  }
}