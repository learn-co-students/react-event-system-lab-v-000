const React = require('react')

class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.focused = this.focused.bind(this);
    this.blured = this.blured.bind(this);
  }

  focused() {
    console.log('Good!');
  }

  blured() {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.focused} onBlur={this.blured}>Tickle me!</button>
    );
  }
}

module.exports = EyesOnMe
