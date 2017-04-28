import React from 'react'

class EyesOnMe extends React.Component {
  constructor(props) {
    super(props)

    this.focus = this.focus.bind(this)
    this.blur = this.blur.bind(this)
  }

  focus() {
    console.log("Good!")
  }

  blur() {
    console.log("Hey! Eyes on me!")
  }

  render () {
    return (
      <button onFocus={this.focus} onBlur={this.blur}>Eyes On Me</button>
    )
  }
}

export default EyesOnMe
