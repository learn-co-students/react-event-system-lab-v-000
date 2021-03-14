// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component{

    handleFocus = (event) => {
        console.log('Good!');
    }

    handleBlur = (event) => {
        console.log('Hey! Eyes on me!');
    }

    render() {
        return <div><button onFocus={this.handleFocus} onBlur={this.handleBlur}/></div>
    }
}