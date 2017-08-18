import React from 'react';
import ReactDOM from 'react-dom';

class Keypad extends React.Component {

  result = () => { console.log('Entering password...');}

  render() {
    return (
      <input type="password" onKeyUp={this.result}/>
    )
  }
}

export default Keypad;
