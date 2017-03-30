const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();

    this.enterPassword = this.enterPassword.bind(this);
  }

  enterPassword() {
    console.log("Entering password...");
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.enterPassword} />
      </div>
    );
  }
}

module.exports = Keypad;