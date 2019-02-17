import React from 'react';

class EyesOnMe extends React.Component {


    handleFocus = () => {
        console.log('Good!')
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button 
                      onFocus={this.handleFocus} 
                      onBlur={this.handleBlur}>
                      Eyes on me, please!
                </button>
            </div>
        )
    }
}
export default EyesOnMe;