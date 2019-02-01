import React from 'react';

class Keypad extends React.Component {
  render() {
    return (
      <div>
        <input
          type="password"
          onKeyUp={this.handleInputPassword}
          />
      </div>
    )
  }
}

export default Keypad;
