import React from 'react';

export default class EyesOnMe extends React.Component {
    logFocus = () => {
        console.log("Good!");
    }
    logBlur = () => {
        console.log("Hey! Eyes on me!");
    }
    render () {
        return (<button onFocus={this.logFocus} onBlur={this.logBlur} ></button>)
    }
}