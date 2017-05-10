const React = require('react');

export default class Keypad extends React.Component {
  constructor() {
    super();
    this.notification = this.notification.bind(this);
  }

  notification () {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.notification} type="password" />
    )
  }
}
