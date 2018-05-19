import React from 'react'

class EyesOnMe extends React.Component {
  focus = () => {
    console.log("Good!")
  }

  blur = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <div className="eyes-on-me">
        <button onFocus={this.focus} onBlur={this.blur} />
      </div>
    )
  }
}

export default EyesOnMe;
