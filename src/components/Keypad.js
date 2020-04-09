// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
    handleKeyUp = (e) => (
        console.log('Entering password...')
    )

    render() {
        return (
            <div className='keypad'>
                <input onKeyUp={this.handleKeyUp} type="password" />"
            </div>
        );
    }
}

export default Keypad;