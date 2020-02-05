// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {

    render(){
        return(
            <input type="password" onKeyUp={ () => {console.log("Entering password...")}}></input>
        )
    }

}