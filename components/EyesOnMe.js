import React from 'react';

export default class EyesOnMe extends React.Component {
    constructor () {
        super();

        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
    }

    focus() {
        console.log("Good!");
    }

    blur() {
        console.log("Hey! Eyes on me!");
    }
    
    render () {
        return (
            <div>
                <button onFocus={this.focus} onBlur={this.blur}>Focus should be here.</button>
            </div>
        );
    }
}