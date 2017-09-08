// Code Keypad Component Here
import React, {Component} from 'react'
export default class Keypad extends Component{

    handleKeyUp = () =>{
        console.log('Entering password...')
    }
    render(){
        return(
            <div>
            <p>Enter A Password</p>
             <input type="password" onKeyUp={this.handleKeyUp} />  
            </div>
        )
    }
}