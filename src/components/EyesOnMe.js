// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    render() {
        return (
            <button onFocus={function(){console.log("Good!")}} onBlur={function(){console.log("Hey! Eyes on me!")}}></button>
        )
    }
}