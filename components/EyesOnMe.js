import React from 'react'

export default class EyesOnMe extends React.Component {
  constructor() {
    super()

    this.slapInTheFace = this.slapInTheFace.bind(this)
    this.goodJob = this.goodJob.bind(this)
  }

  slapInTheFace() {
    console.log("Hey! Eyes on me!")
  }

  goodJob() {
    console.log("Good!")
  }

  render() {
    return (
      <button onFocus={this.goodJob} onBlur={this.slapInTheFace}>Press me</button>
    )
  }
}
