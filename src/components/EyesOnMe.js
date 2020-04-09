// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
    handleFocus = (e) => (
        console.log('Good!')
    )

    handleBlur = (e) => (
        console.log('Hey! Eyes on me!')
    )

    render() {
        return (
            <div className='eyes-on-me'>
                <button
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                >
                    Mouse Here
            </button>
            </div>
        );
    }
}

export default EyesOnMe;