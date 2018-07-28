// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
    validation = () => {
        console.log("Good!")
    }
    chastisement = () => {
        console.log("Hey! Eyes on me!")
    }
    render () {
        return (
            <button onFocus={this.validation} onBlur={this.chastisement}></button>
        )
    }
}