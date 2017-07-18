// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component{
    constructor(props) {
        super(props);
        // this.getFocus = this.getFocus.bind(this); // make the funcion available on the object? - unnneded
    }
    getFocus() {
        console.log('Good!');
    }
    getBlur() {
        console.log('Hey! Eyes on me!');
    }
    render(){
        return (
            <div>
                <button onFocus={this.getFocus} onBlur={this.getBlur} />
            </div>
        )
    }
}