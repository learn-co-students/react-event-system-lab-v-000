// Code Keypad Component Here
import React from 'react'
export default class Keypad extends React.Component {
    constructor(props){
        super()
    }

    keyUp(event){
        console.log("Entering password...")
    }
    render(){
        return(
        <input onKeyUp={this.keyUp} type="password"></input>
        )
    }
}
