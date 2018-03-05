// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
  enterPassword = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <form>
          <input type='password' onKeyUp={this.enterPassword}>Type password here</input>
        </form>
      </div>
    )
  }
}