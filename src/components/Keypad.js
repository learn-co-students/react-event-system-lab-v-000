import React from 'react';

class Keypad extends React.Component {

  enteringPassword = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input onKeyUp={this.enteringPassword} type="password" />
      </div>
    );
  }
}

export default Keypad;