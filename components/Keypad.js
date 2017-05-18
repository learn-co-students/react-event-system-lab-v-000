const React = require('react');

export default class Keypad extends React.Component {
  constructor() {
    super();
    this.showPassword = this.showPassword.bind(this);
  	}
  	
		showPassword() {
    console.log('Entering password...');
  }
 
  render() {
    return (
			<div className="keypad">
				<input type="password" onKeyUp={this.showPassword}/>
			</div>
	  );
  }
}