// Code EyesOnMe Component Here

import React from 'react'

class EyesOnMe extends React.Component {

    buttonFocus = () => {
        console.log("Good!")
    }

    buttonBlur = () => {
        console.log("Hey! Eyes on me!")
    }

    render(){
        return (
            <button onFocus={this.buttonFocus} onBlur={this.buttonBlur}>Boop</button>
        )
    }
}

export default EyesOnMe