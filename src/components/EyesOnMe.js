// Code EyesOnMe Component Here

import React from 'react';

export default class EyesOnMe extends React.Component {
    focusLog = () => {
        console.log('Good!');
    }

    blurLog = () => {
        console.log('Hey! Eyes on me!');
    }

    render() {
        return (
            <div className="eyes-on-me">
                <button onFocus={this.focusLog} onBlur={this.blurLog}>Click Me</button>
            </div>
        )
    }
}
