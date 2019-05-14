import React from 'react';

class Keypad extends React.Component {

  Entering = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div className="keypad">
        <input type="password" onKeyUp={this.entering} />
      </div>
    )
  }

};
export default Keypad;
