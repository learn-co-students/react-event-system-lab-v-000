// Code Keypad Component Here
import React, {Component} from 'react';

export default class Keypad extends Component {
    print = () => {
        console.log('Entering password...');
    }
    
    render(){
        return(
            <div>
                <label>password:</label>
                <input type="password" onKeyUp={this.print}></input>
            </div>
        )
    }
}