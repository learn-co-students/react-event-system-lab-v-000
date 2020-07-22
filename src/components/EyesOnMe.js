import React, {Component} from 'react';

export default class EyesOnMe extends Component {


seeingMe = () => {
    console.log('Good!')
}

focusOnMe = () => {
    console.log('Hey! Eyes on me!')
}


render () {

    return (
        <div>
            <button onFocus={this.seeingMe} onBlur={this.focusOnMe} /> 
        </div>)
}




}
