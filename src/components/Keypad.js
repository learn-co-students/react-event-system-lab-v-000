import React from 'react';

class Keypad extends React.Component {


  setKeyUp = () => {
    console.log('Entering password...');
  }

	render() {
		return (
			<div><input type="password"  onKeyUp={this.setKeyUp} /></div>
		);
	}
}


export default Keypad;
