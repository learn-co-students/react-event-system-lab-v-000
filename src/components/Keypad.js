// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
    entry = () => {
        console.log('Entering password...');
    }
    
    render() {
            return ( <input onKeyUp={this.entry} type="password" /> );
    }
}

export default Keypad