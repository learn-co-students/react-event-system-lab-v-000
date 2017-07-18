// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component{
    constructor(props) {
        super(props);
    }
    entering_password() {
        console.log('Entering password...');
    }
    render(){
        return (
            <div>
                <input type="password" onKeyUp={this.entering_password} />
            </div>
        )
    }
}