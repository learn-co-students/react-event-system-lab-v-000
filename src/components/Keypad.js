import React from 'react';

class Keypad extends React.Component {
  listener = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.listener}/>

    )
  }
}

export default Keypad;
