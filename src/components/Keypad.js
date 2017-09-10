import React from 'react';
import ReactDOM from 'react-dom';
//  create class keypad 
export default class Keypad extends React.Component {
  constructor() {
    super();
    // this .event of handle function == this.handle e
    
    this.handleInputPassword = this.handleInputPassword.bind(this);
  }

  handleInputPassword() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleInputPassword}/>
      </div>
    );
  }
}