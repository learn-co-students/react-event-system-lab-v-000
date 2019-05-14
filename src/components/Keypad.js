import React, { Component } from 'react';

export default class Keypad extends Component {
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this)
    }

    handleKeyUp() {
        console.log("Entering password...")
    }

    render() {
        return(
            <form>
                <label>
                    Password:
                    <input type="password" onKeyUp={this.handleKeyUp} />
                </label>
            </form>
        )
    }

}