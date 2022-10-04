import React, { Component } from 'react'

export class Spinner extends Component {
    
    render() {
        let spinStyles = {}
        if (this.props.mode === 'dark') {
            spinStyles = { color: 'white' }
        } else {
            spinStyles = { color: 'black' }
        }
        return (
            <div className="d-flex justify-content-center" style={{spinStyles}} >
                <div className="spinner-border my-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}
export default Spinner