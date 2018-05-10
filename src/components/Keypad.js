import React from 'react';

export default class Keypad extends React.Component {

  keyUp = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.keyUp} />
      </div>
    )
  }
}
