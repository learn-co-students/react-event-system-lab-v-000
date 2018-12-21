import React from 'react'

class EyesOnMe extends React.Component {
  onFocus = () => {console.log('Good!')}
  onBlur = () => {console.log('Hey! Eyes on me!')}
  //these are both functions that will be triggered via onFocus and onBlur
  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}/>
    )
  }
}

export default EyesOnMe
