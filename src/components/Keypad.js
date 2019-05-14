import React, { Component } from 'react';

export default class Keypad extends Component {
  
  constructor(props) {
    super(props)
  }

	handleKey = () => (console.log("Entering password..."))

  render() {
    return (
      <div className="cell">
				<input type="password" onKeyUp={(e) => this.handleKey()} />
      </div>
    )
  }
  
}
