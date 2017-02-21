const React = require('react');

class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.eyesFocus = this.eyesFocus.bind(this)
    this.eyesBlur = this.eyesBlur.bind(this)
  }

  eyesFocus() {
    console.log('Good!')
  }

  eyesBlur() {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.eyesFocus} onBlur={this.eyesBlur}>Click me!</button>
    );
  }
};

module.exports = EyesOnMe;