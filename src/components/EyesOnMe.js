import React from 'react'

class EyesOnMe extends React.Component {
  focusFire = () => {
    console.log('Good!')
  }
  blurFire = () => {
    console.log('Hey! Eyes on me!')
  }
  render () {
    return (
      <button onFocus={this.focusFire} onBlur={this.blurFire} />
    )
  }
}

export default EyesOnMe
