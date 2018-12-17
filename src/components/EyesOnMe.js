import React from 'react'

export default class EyesOnMe extends React.Component {
	handleFocus = () => console.log('Good!')
	handleBlur = () => console.log('Hey! Eyes on me!')
 
  render() {
    return (
      <button
      	// handleFocus should be called when the button is clicked, 
      	// and handleBlur should be called when something else becomes the focus
      	onFocus={this.handleFocus}
      	onBlur={this.handleBlur}>
      </button>
    )
  }
}
