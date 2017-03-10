const React = require('react');


class Keypad extends React.Component {
  constructor() {
    super();

    this.tickle = this.tickle.bind(this);
    }

  tickle() {
      console.log('Entering password...');
    }

  render() {
    return (
      <div >
        <input type='password' onKeyUp={this.tickle}/>
      </div>
    );
  }
}

module.exports = Keypad;