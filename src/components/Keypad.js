// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component{
    onclickcapture = () => {
        console.log('Entering password...');
      }

    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.onclickcapture}/>
            </div>
        );
      }
}

export default Keypad;