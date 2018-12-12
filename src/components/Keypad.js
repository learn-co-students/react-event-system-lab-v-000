// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
    onKeyUp(event) {
        console.log('Entering password...');
    }

    render() {
        return (
            <form>
                <input type='password' onKeyUp={this.onKeyUp} />
            </form>
        )
    }
}

export default Keypad;

