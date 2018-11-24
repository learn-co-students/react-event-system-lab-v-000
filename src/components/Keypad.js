import React from 'react';

export default class Keypad extends React.Component {
    
    handleKeyUp = (event) => {
        console.log('Entering password...')
    }
    
    render () {
        return (
            <div>
                <input type="password" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}
