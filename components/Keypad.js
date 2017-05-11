const React = require('react');

export default class Keypad extends React.Component {
  constructor() {
    super();
    this.enterPwd = this.enterPwd.bind(this);
  }

  enterPwd() {
    console.log('Entering password...');
  }
  render() {
    return (
      <div className="keypad"><input type="password" name="keypad" onKeyUp={this.enterPwd}/></div>
    );
  }
}
