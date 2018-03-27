import React from 'react';

class Keypad extends React.Component {
  message = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <form>
        <input type="password" onKeyUp={this.message} />
      </form>
    );
  }
}

export default Keypad;
