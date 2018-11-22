
import React, { Component } from 'react';


export default class EyesOnMe extends Component {
    constructor(){
        super()
    }

    handleOnFocus = (event) => {
        console.log("Good!");
    }

    handleOnBlur = (event) => {
        console.log('Hey! Eyes on me!');
    }

    render(){
        return(
            <div className='EyesOnMe'>
                <button onBlur={ this.handleOnBlur } onFocus={ this.handleOnFocus }>submit</button>
            </div>
        )
    }
}
