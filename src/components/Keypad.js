// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component{
    enteringPass = () => {
        console.log("Entering password...")
    }

    render(){
        return (
            <input onKeyUp={this.enteringPass} type="password" />
        )
    }
}