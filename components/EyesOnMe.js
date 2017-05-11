const React = require('React');

export default class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.focusEvent = this.focusEvent.bind(this);
    this.blurEvent = this.blurEvent.bind(this);
  }

  focusEvent() {
    console.log('Good!');
  }

  blurEvent() {
    console.log('Hey! Eyes on me!');
  }
  
  render() {
    return (
      <button onFocus={this.focusEvent} onBlur={this.blurEvent} value="Button"/>
    )
  }
}
