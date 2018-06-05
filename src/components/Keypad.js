import React from 'react';
import PropTypes from 'prop-types';

class Keypad extends React.Component {

  //how do i know where to put my variables and methods?
  //before render, after render before return?

  output = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div className="keypad">
        <input type="password" onKeyUp={this.output}></input>
      </div>
    )
  }
}

export default Keypad;
