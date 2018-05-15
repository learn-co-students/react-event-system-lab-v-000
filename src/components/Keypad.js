import React from 'react';

export default class Keypad extends React.Component {
  keypad = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div className="keypad">
        <input type="password" onKeyUp={this.keypad}></input>
      </div>
    );
  }
}