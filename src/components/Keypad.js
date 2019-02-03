import React, {Component } from 'react'

class Keypad extends Component {

    passwordHandler() {
        console.log("Entering password...");
    }
    render() {
        return (
            <div><input type= "password" id="password" placeholder="Enter password" onKeyUp={this.passwordHandler}/></div>
        )
    }

}

export default Keypad;