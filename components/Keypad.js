const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();

    this.logPassword = this.logPassword.bind(this)
  }

  logPassword() {
    console.log('Entering password...');
  };

  render() {
    return (
      <input type="password" onKeyUp={this.logPassword} />
    );
  }
};

module.exports = Keypad;