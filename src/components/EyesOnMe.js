import React from 'react';
export default class EyesOnMe extends React.Component {
    
    focusEvent = function() {
        console.log('Good!')
    }
    blurEvent = function() {
        console.log('Hey! Eyes on me!')
    }
    render(){
        return (
            <button onFocus={this.focusEvent} onBlur={this.blurEvent}></button>
        )
    } 
}