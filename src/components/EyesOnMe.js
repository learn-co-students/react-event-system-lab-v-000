import React from 'react';

class EyesOnMe extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    focused = () => {
        console.log('Good!');
        }

    distracted = () => {
        console.log('Hey! Eyes on me!');
        }

    render(){
        return (
            <button onFocus={this.focused} onBlur={this.distracted}></button>
        );
    }
}

export default EyesOnMe;