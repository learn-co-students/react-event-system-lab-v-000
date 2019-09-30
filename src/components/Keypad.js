import React from 'react';

class Keypad extends React.Component {
  handlePasswordEvent = () => console.log("Entering password...")

  render() {
    return (
      <div>
      <input type="password" onKeyUp={this.handlePasswordEvent}/>
      </div>
    )
  }
}

export default Keypad;
