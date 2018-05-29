import React from 'react';
// Code EyesOnMe Component Here

class EyesOnMe extends React.Component {

    good = () => {
        console.log('Good!')
    };

    heyThere = () => {
        console.log('Hey! Eyes on me!')
    }

    render () {
        return (
            <div className="eyes-on-me">
            <button onFocus={this.good} onBlur={this.heyThere}>You there?</button>
            </div>
        )
    }
};

export default EyesOnMe;
