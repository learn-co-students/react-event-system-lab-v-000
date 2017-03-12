const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();

    this.reply = this.reply.bind(this);
  }

  reply() {
    console.log("Entering password...")
  }

  render() {
    return (
      <div>
        <input onKeyUp={this.reply} type="password" />
      </div>
    );
  }
}

module.exports = Keypad;
