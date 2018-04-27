import React from 'react';

class Keypad extends React.Component {

  access = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <input type="password" onKeyUp={this.access}/>
    );
  }
}

export default Keypad;
