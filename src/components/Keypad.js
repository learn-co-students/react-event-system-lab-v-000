import React from 'react';

class Keypad extends React.Component {

	print = () => console.log('Entering password...')


	render() {
	    return (
	    	<div>
		    	<input type="password" onKeyUp={this.print} />
	    	</div>
	    )
	}
}

export default Keypad;