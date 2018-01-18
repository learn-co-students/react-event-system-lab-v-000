import React from 'react';

export default class EyesOnMe extends React.Component{

    focusElement = () => {
        console.log('Good!');
    }

    blurElement = () => {
        console.log('Hey! Eyes on me!');
    }

    render(){
        return(
            <button onFocus={this.focusElement} onBlur={this.blurElement}>Click me!</button>
        )
    }
}