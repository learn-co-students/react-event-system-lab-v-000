import React, { Component } from 'react'


class Keypad extends Component {

  handleKey = () => {
    console.log("Entering password...")
  }


    render() {
        return (
            <div>
              <form>
                <input type="password" onKeyUp ={this.handleKey}/>
              </form>
            </div>
        )
    }
}

export default Keypad;
