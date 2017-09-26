import React from 'react';

export default class Keypad extends React.Component {
  password = () => {console.log('Entering password...')}
  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.password}></input>
      </div>
    )
  }
}
