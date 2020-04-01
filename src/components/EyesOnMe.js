import React, { Component } from 'react';


export default class EyesOnMe extends Component {

    focusOnButton = () => console.log('Good!')

    blurOnButton = () => console.log('Hey! Eyes on me!')
    
    render() {
        return (
            <div>
             <button onFocus={this.focusOnButton} onBlur={this.blurOnButton}>
                    Look At Me!
             </button>
            </div>
        )
    }

}