import React from 'react';

class Keypad extends React.Component {

  input = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.input}></input>
      </div>
    )
  }

}

export default Keypad;
