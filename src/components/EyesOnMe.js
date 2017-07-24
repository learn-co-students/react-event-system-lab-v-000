import React from 'react';

class EyesOnMe extends React.Component {
    constructor(){
        super();
        
        this.eyeContact = this.eyeContact.bind(this);
        this.driftOff = this.driftOff.bind(this);
    }
        
    eyeContact(){
        console.log('Good!');
    }
        
    driftOff(){
        console.log('Hey! Eyes on me!');
    }
    
    render(){
        return(
            <button onFocus={ this.eyeContact } onBlur={ this.driftOff }></button>
        );
    }
}

export default EyesOnMe;