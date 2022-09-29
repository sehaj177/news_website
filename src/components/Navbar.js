import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import './Navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/General" >Sach News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/Business">Business</Link></li>
                                    <li><Link className="dropdown-item" to="/General">General</Link></li>
                                    <li><Link className="dropdown-item" to="/Health">Health</Link></li>
                                    <li><Link className="dropdown-item" to="/Science">Science</Link></li>
                                    <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
                                    {/* <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                </ul>
                            </li>
                             {/* ADD COUNTRY SELECTOR AS  A PROP */}
                        </ul>
                        
                    </div>
                </div>
            </nav>
        )
    }


}