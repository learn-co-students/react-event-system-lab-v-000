
import React, { Component } from 'react';


export default class Keypad extends Component {
    constructor(){
        super()
    }


    handleOnKeyUp = (event) => {

        console.log("Entering password...");
    }

    render(){
        return (
            <div className='keypad'>
                <form>
                    Password: <input type='password' onKeyUp={ this.handleOnKeyUp }/>

                </form>
            </div>
        )
    }
}
