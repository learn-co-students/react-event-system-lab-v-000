import React from 'react';

class Keypad extends React.Component{
    typing = () => {
        console.log('Entering password...')
    }

    render (){
        return(
            <div>
                <label>Enter Password:</label>
                <input onKeyUp={this.typing} type="password"></input>
            </div>    
        );
    }
}

export default Keypad;