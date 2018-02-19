import React from 'react';

class Keypad extends React.Component{
  logger = () => {
    console.log('Entering password...')
  }

  render() {
    return(
      <input type="password" onKeyUp={this.logger} />
    )
  }
}

export default Keypad
