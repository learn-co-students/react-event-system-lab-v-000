// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends React.Component {
    handleFocus = () => console.log('Good!');
    handleBlur = () => console.log('Hey! Eyes on me!');
	render() {
		return (
			<div className="EyesOnMe">
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Eyes on me!</button>
			</div>
		);
	}
}

export default EyesOnMe;