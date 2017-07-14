import React from 'react'

export default class Keypad extends React.Component {
	listenUp = () => {
		console.log('Entering password...')
	}

	render() {
		return (
			<input onKeyUp={this.listenUp} type="password" />
		)
	}
}