import React from 'react';

export default class EyesOnMe extends React.Component {

    eyeFocus = () => {
        console.log('Good!');
    }
    eyeBlur = () => {
        console.log('Hey! Eyes on me!');
    }

    render() {
        return (
            <button onFocus={this.eyeFocus} onBlur={this.eyeBlur}></button>
        );
    }
}
