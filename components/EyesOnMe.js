const React = require('react');

class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.whenFocused = this.whenFocused.bind(this);
    this.whenBlurred = this.whenBlurred.bind(this);
  }

  whenFocused() {
    console.log("Good!");
  }

  whenBlurred() {
    console.log("Hey! Eyes on me!");
  }

  render() {
    return (
      <button onFocus={this.whenFocused} onBlur={this.whenBlurred}>Focus!</button>
    );
  }
}

module.exports = EyesOnMe;