import React from 'react'

class EyesOnMe extends React.Component {
  pushMe = () => {
    console.log('Good!')
  }

  blurMe = () => {
    console.log('Hey! Eyes on me!')
  }

    render() {
      return (
        <div>
          <button onFocus={this.pushMe} onBlur={this.blurMe}>Click Me </button>
        </div>
      )
    }
}

export default EyesOnMe
