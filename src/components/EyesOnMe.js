import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  
  constructor(props) {
    super(props)
  }

  handleKey = () => (console.log("Entering password..."))
	handleFocus = (e) => (console.log('Good!'))
	handleBlur = (e) => (console.log('Hey! Eyes on me!'))	

  render() {
    return (
      <div className="cell">
				<button type="button" onFocus={e => this.handleFocus(e)} onBlur={e => this.handleBlur(e)}>Eyes On Me!</button>
      </div>
    )
  }
  
}

