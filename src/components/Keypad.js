// Code Keypad Component Here
//

import React from 'react';

class Keypad extends React.Component {
        constructor() {
        super();

	 
	 this.keyUp = this.keyUp.bind(this);
        }

	keyUp() {
	 console.log('Entering password...')
	}

        render() {


                return (
                        <div>
				<input type="password" onKeyUp={this.keyUp}/>
                        </div>
                )

        }

};

export default Keypad;
