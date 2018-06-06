import React from 'react'

class EyesOnMe extends React.Component {

	onOnFocus() {
		console.log('Good!')
	}

	onOnBlur() {
		console.log('Hey! Eyes on me!')
	}

	render() {
		return (
			<button onFocus={this.onOnFocus} onBlur={this.onOnBlur} />
		)
	}
}

export default EyesOnMe;