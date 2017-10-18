import React from 'react';

class Keypad extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    enterPass = () => {
                        console.log('Entering password...');
                        }

    render(){
        return (
            <input type="password" onKeyUp={this.enterPass}/>
        );
    }
}

export default Keypad;
