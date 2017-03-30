const React = require('react');

class EyesOnMe extends React.Component {

  constructor() {
    super();

    this.good = this.good.bind(this);
    this.eyesOnMe = this.eyesOnMe.bind(this);
  }

  good() {
    console.log("Good!");
  }

  eyesOnMe() {
    console.log("Hey! Eyes on me!");
  }

  render() {
    return(
      <button onFocus={this.good} onBlur={this.eyesOnMe} >Eyes on Me</button>
    );
  }
}

module.exports = EyesOnMe;
