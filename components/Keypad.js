const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();

    this.passwordMessage = this.passwordMessage.bind(this);
  }

  passwordMessage() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.passwordMessage}/>
      </div>
    );
  }
}

module.exports = Keypad;
