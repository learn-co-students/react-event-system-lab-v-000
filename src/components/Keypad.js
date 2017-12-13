// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
    passwordHandler = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.passwordHandler}/>
            </div>
        )
    }
}

export default Keypad