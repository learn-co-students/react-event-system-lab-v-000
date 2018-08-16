import React from 'react';

class Keypad extends React.Component {

  password = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input
          type="password"
          onKeyUp={this.password}
        />
      </div>
    )
  }
}

export default Keypad;