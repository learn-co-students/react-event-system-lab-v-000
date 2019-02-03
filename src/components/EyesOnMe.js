import React, {Component} from 'react'


class EyesOnMe extends Component {

    focusHandler() {
        console.log("Good!");
    }

    blurHandler() {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <div>
                <button type="button" onFocus={this.focusHandler} onBlur={this.blurHandler}>Button</button>
            </div>
        )
    }
}

export default EyesOnMe;