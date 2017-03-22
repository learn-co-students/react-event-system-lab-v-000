const React = require('react');


class Keypad extends React.Component {
  constructor(){
    super();
    this.password = this.password.bind(this)
  }

  password(){
    console.log('Entering password...')
  }

  render(){
    return (
      <input type="password" onKeyUp={this.password}  />
    )
  }
}

module.exports = Keypad;
