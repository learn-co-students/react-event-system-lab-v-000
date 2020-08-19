// Code EyesOnMe Component Here
import React from 'react'
export default class EyesOnMe extends React.Component {
    constructor(props){
        super()
    }

    blurring(event){
        console.log("Hey! Eyes on me!")
    }

    focus(event){
        console.log("Good!")
    }

    render(){
        return(
        <button onBlur={this.blurring} onFocus={this.focus}>button</button>   
        )
    }
}