import React from 'react';

export default class Keypad extends React.Component {
  constructor() {
    super();
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}
