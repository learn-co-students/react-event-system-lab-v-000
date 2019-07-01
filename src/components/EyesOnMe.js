import React from 'react';

export class EyesOnMe extends React.Component {
	onFocus = (e) => console.log('Good!')

	onBlur = (e) => console.log('Hey! Eyes on me!')

	render() {
		return (<button onFocus={this.onFocus} onBlur={this.onBlur}></button>)
	}
}

export default EyesOnMe;