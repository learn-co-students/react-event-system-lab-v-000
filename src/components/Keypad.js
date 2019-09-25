import React, {Component} from 'react';

class Keypad extends Component{
    handleOnKeyUp = () =>{console.log("Entering password...")}
    
    render(){
        return(
            <input type="text" onKeyUp={this.handleOnKeyUp}></input>

        )

    }

}

export default Keypad;