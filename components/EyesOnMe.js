const React = require('react');

export default class EyesOnMe extends React.Component {
  constructor() {
    super();
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
  	}
  	
		focus() {
    console.log('Good!');
  }
  	
		blur() {
    console.log('Hey! Eyes on me!');
  }
 
  render() {
    return (
			<div className="keypad">
				<button onFocus={this.focus} onBlur={this.blur}>Focus!</button>
			</div>
	  );
  }
}