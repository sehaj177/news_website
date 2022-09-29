import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center" style={
                {position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-50 px',
                marginLeft: '-50 px',
                width: '100 px',
                height: '100 px'}
            }>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}
export default Spinner