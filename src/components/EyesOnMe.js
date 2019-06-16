import React from 'react'

export default class EyesOnMe extends React.Component {

  affirm = () => {
    console.log ('Good!')
  }
  scold = () => {
    console.log ('Hey! Eyes on me!')
  }

  render() {
    return (
      <div>
        <button onFocus={this.affirm} onBlur={this.scold}>Buddy Attention</button>
      </div>
    )
  }
}
